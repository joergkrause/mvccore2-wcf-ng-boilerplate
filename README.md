Default Architecture
====================

This is a project that joins two up-to-date technologies for a rock solid, highly scalable and flexible deployable multi-tier-application.

The approach is to create an enterprise ready blueprint (explicitly NOT for small business or start-up) for developers, who want to replace an existing .NET-WinForm or WPF application with a modern, web-oriented design.

## Technologies

### Backend

Approach: Solid and reliable backend for Windows Servers.

* .NET 4.7
* Entity Framewortk 6.1.3
* AutoFac for Dependency Injection
* NUnit for Unit-Testing
* AutMapper for Mappings

### Service Layer

Make the App Server scalable independently of the Web Front End.

* WCF
* AutoFac - WCF Integration for Dependency Injection

### Web Front End

* .NET Core 2.0
* ASP.NET WebAPI
* Kestrel with IIS-Integration

### Client

* Angular 4.3 
* NgBootstrap
* Svogv

## Setup

Make a local clone of the repo. You need a local installation of .NET 4.7 and NodeJS 6 or newer.

Build the project. This will restore the dependencies.

Execute the unit test to create a local database and setup EntityFramework.

The client app makes use of Gulp to build the frontend. Install gulp:

~~~
npm i gulp -g
~~~

Then build the project *JoergIsAGeek.Workshop.Enterprise.WebApplication* again. This will execute the default task of Gulp.

Point a webserver to *wwwroot* or start the integrated one. Install the http-server first:

~~~
npm i http-server -g
~~~

Start you project:

~~~
npm start
~~~





