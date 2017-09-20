/// <binding AfterBuild='default' Clean='clean' />
/**

 Gulpfile.js, Build & Pack processing for debug and test releases.

 Author: Joerg Krause <joerg@krause.net>

 Note: The final packaging process for production is made using WebPack. Gulp is more flexible and has more 
       opportunities while debugging, WebPack is more powerful and has faster loading mechanisms than systemjs 
       used in the gulpfile procdure. 

*/

var gulp = require('gulp');                                 // Build tool
var uglify = require('gulp-uglify');                        // minify JS
var uglifycss = require('gulp-uglifycss');                  // minify CSS
var htmlmin = require('gulp-htmlmin');                      // minify HTML
var ts = require('gulp-typescript');                        // transpile TS
var remHtmlCom = require('gulp-remove-html-comments');      // Remove comments
var sass = require('gulp-sass');                            // transpile SASS
var del = require('del');                                   // helper to delete paths
var flatten = require('gulp-flatten');                      // flat paths to re-arrange in the wwwroot target
var print = require('gulp-print');                          // output helper
var systemBuilder = require('systemjs-builder');            // create a rx bundle because the provided did not work

// from Github structure copy static files to root/dist/demo and execute there
var upPath = "./wwwroot/";

// The project's structure
var paths = {
  root: upPath + "",
  assets: upPath + "assets/",
  views: upPath + "views/",
  npm: "./node_modules/",
  app: "./src/app/",
  appassets: './src/assets/'
};

gulp.task('clean:assets', function (cb) {
  return del(paths.assets, { force: true });
});
gulp.task('clean:views', function (cb) {
  return del(paths.views, { force: true });
});
gulp.task('clean:views:index', function (cb) {
  return del(paths.root + "index.html", { force: true });
});
gulp.task('clean', ['clean:assets', 'clean:views', 'clean:views:index']);

gulp.task('copy:js', function () {
  console.log("Assets target: " + paths.assets + 'js/lib');
  return gulp.src([
    paths.npm + 'core-js/client/core.js',
    paths.npm + 'zone.js/dist/zone.js',
    paths.npm + 'reflect-metadata/reflect.js',
    paths.npm + 'systemjs/dist/system.js',
    paths.npm + 'systemjs/dist/system-polyfills.js',
    paths.npm + '@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js',
    '!/**/*.min.js' // we minify everything by ourselves
  ])
    //.pipe(uglify())
    .pipe(gulp.dest(paths.assets + 'js/lib'));
});

// This is a simple loader while debugging without going through the WebPack hassle
gulp.task('copy:systemjs', function () {
  return gulp.src([paths.app + 'systemjs.config.js',
    paths.app + 'system.component-loader.js'])
    .pipe(gulp.dest(paths.assets + 'js'));
});

gulp.task('copy:angular', function () {
  return gulp.src([
    paths.npm + '@angular/**/Bundles/*.umd.js',
    '!' + paths.npm + '@angular/bundles/svogv.umd.js'
  ])
    //.pipe(uglify())
    .pipe(gulp.dest(paths.assets + 'js/lib/@angular'));
});

gulp.task('copy:other', function () {
  return gulp.src([
    paths.npm + 'svogv/Bundles/*.umd.js'
  ])
    //.pipe(uglify())
    .pipe(gulp.dest(paths.assets + 'js/lib/other'));
});

// Create RxJs bundle 
gulp.task('copy:rxjs', function () {
  var builder = new systemBuilder('./', {
    paths: { 'rxjs/*': `${paths.npm}rxjs/*.js` },
    map: { "rxjs": `${paths.npm}rxjs` },
    packages: { "rxjs": { main: 'Rx.js', defaultExtension: "js" } }
  });
  // create the bundle we use from systemjs.config.js
  builder.bundle('rxjs', paths.assets + 'js/lib/rxjs/Bundles/Rx.min.js', {
    sourceMaps: false,
    minify: true,
    mangle: true
  });
});

// we write all css in sass 
gulp.task('sass:global', function () {
  return gulp.src(paths.appassets + 'styles/app.scss')
    .pipe(sass())
    .pipe(uglifycss())
    .pipe(gulp.dest(paths.assets + 'css'));
});

gulp.task('sass:components', function () {
  return gulp.src(paths.app + '**/*.scss')
    .pipe(sass())
    .pipe(uglifycss())
    .pipe(gulp.dest(paths.root + 'app'));
});

gulp.task('sass', ['sass:global', 'sass:components']);

// those css that's delivered "as is", everything through sass
gulp.task('copy:css', function () {
  return gulp.src([
    paths.npm + 'font-awesome/css/font-awesome.css'
  ])
    .pipe(gulp.dest(paths.assets + 'css'));
});
// icons and symbols shall be fonts, never want to see a single GIF here
gulp.task('copy:fonts', function () {
  return gulp.src([
    paths.npm + 'font-awesome/fonts/*.*'
  ])
    .pipe(gulp.dest(paths.assets + 'fonts'));
});
// View HTML (component templates)
gulp.task('copy:views:templates', function () {
  return gulp.src([paths.app + '**/*.html', '!' + paths.app + 'index.html']) // GLOB
    .pipe(print())
    .pipe(remHtmlCom())
    //.pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(paths.root + 'app'));
});
gulp.task('copy:views:index', function () {
  return gulp.src([paths.app + 'index.html'])
    //.pipe(remHtmlCom())
    //.pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(paths.root));
});
gulp.task('copy:views', ['copy:views:index', 'copy:views:templates']);

gulp.task('copy:images', function () {
  return gulp.src([paths.appassets + 'images/**/*.*'])
    .pipe(gulp.dest(paths.assets + 'img'));
});

gulp.task('copy:json', function () {
  return gulp.src(paths.app + 'assets/**/*.json')
    .pipe(gulp.dest(paths.assets));
})

gulp.task('copy', ['copy:js', 'copy:other', 'copy:json', 'copy:rxjs', 'copy:angular', 'copy:systemjs', 'copy:css', 'copy:fonts', 'copy:views', 'copy:images']);

// configure TS separately
var tsProject = ts.createProject('tsconfig.json');

gulp.task('ts', function () {
  return tsProject.src()
    .pipe(tsProject())
    .js
    .pipe(gulp.dest(paths.root));

});

gulp.task('debug', function () {
  return gulp.src(paths.app + '**/*.ts')
    .pipe(gulp.dest(paths.root + 'src'));
});

// watch the ts folders and start transpiler automatically on save
gulp.task('watchts', ['ts'], function () {
  gulp.watch(paths.app + '**/*.ts', ['ts']);
});

// complete setup
gulp.task('build', ['ts', 'copy']);

// for convenience
gulp.task('default', ['build']);