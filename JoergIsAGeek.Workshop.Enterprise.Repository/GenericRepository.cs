using JoergIsAGeek.Workshop.Enterprise.DomainModels;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer;

namespace JoergIsAGeek.Workshop.Enterprise.Repository {
  public class GenericDbRepository<T, U> : IGenericRepository<T, U> where T : EntityBase {


    public GenericDbRepository() {
    }

    private DbContext Context {
      get {
        var _http = HttpContext.Current;
        MachineDataContext context = null;
        if (_http == null) {
          context = new MachineDataContext();
        } else {
          var key = _http.GetHashCode().ToString("x");
          if (_http.Items.Contains(key)) {
            context = _http.Items[key] as MachineDataContext;
          } else {
            context = new MachineDataContext();
            _http.Items.Add(key, context);
          }
        }
        return context;
      }
    }

    public T Find(U id) {
      return Context.Set<T>().Find(id); //.Single(u => u.Id == id);
    }

    public IEnumerable<T> Read(Expression<Func<T, bool>> predicate, params Expression<Func<T, object>>[] paths) {
      if (Count() > 10000) {
        throw new ArgumentOutOfRangeException("to many results");
      }
      var model = Context.Set<T>().AsQueryable();
      foreach (var path in paths) {
        model = model.Include(path); // 
      }
      return model.Where(predicate).ToList();
    }

    public IQueryable<T> Query(Expression<Func<T, bool>> predicate, 
      params Expression<Func<T, object>>[] paths) {
      if (Count() > 10000) {
        throw new ArgumentOutOfRangeException("to many results");
      }
      var model = Context.Set<T>().AsQueryable();
      foreach (var path in paths) {
        model = model.Include(path);
      }
      return model.Where(predicate);
    }

    public int Count() {
      return Context.Set<T>().Count();
    }

    public bool InsertOrUpdate(T model) {
      Context.Entry(model).State = model.Id == default(int) ? EntityState.Added : EntityState.Modified;
      return Context.SaveChanges() == 1;
    }

    public bool Delete(T model) {
      Context.Entry(model).State = EntityState.Deleted;
      return Context.SaveChanges() == 1;
    }


  }
}
