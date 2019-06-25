using Autofac;
using Autofac.Integration.Wcf;
using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer;
using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer;
using JoergIsAGeek.Workshop.Enterprise.DomainModels;
using JoergIsAGeek.Workshop.Enterprise.DomainModels.Authentication;
using JoergIsAGeek.Workshop.Enterprise.Repository;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Web;
using System.Web.Configuration;
using System.Web.Security;
using System.Web.SessionState;

namespace JoergIsAGeek.Workshop.Enterprise.ServiceLayer
{
  public class Global : System.Web.HttpApplication
  {

    protected void Application_Start(object sender, EventArgs e)
    {
      var cfg = WebConfigurationManager.ConnectionStrings[nameof(MachineDataContext)].ConnectionString;
      var builder = new ContainerBuilder();
      // User manager that puts through the identity conveniently
      builder.RegisterType<UserContextProvider>().AsImplementedInterfaces();
      // Globally the services itself
      builder.RegisterType<MachineService>();
      builder.RegisterType<AuthenticationService>();
      // The configuration bridge between WCF and EF Core
      var optionBuilder = new DbContextOptionsBuilder();
      optionBuilder.UseSqlServer(cfg);
      builder.RegisterInstance(optionBuilder.Options).As<DbContextOptions<DbContext>>();
      // Per request to assure context per user
      builder.RegisterType<MachineDataContext>().InstancePerLifetimeScope();
      // as usually
<<<<<<< HEAD
      builder.RegisterType<GenericDbRepository<Machine, int>>().AsImplementedInterfaces();
      builder.RegisterType<GenericDbRepository<Device, int>>().AsImplementedInterfaces();
      builder.RegisterType<GenericDbRepository<DataValue, int>>().AsImplementedInterfaces();
      builder.RegisterType<GenericDbRepository<ApplicationUser, string>>().AsImplementedInterfaces();
      builder.RegisterType<GenericDbRepository<ApplicationRole, string>>().AsImplementedInterfaces();
      // the business logic is non deterministic hence singleton is fine
      builder.RegisterType<MachineManager>().As<IMachineManager>().InstancePerLifetimeScope().PropertiesAutowired();
      builder.RegisterType<AuthenticationManager>().As<IAuthenticationManager>().InstancePerLifetimeScope().PropertiesAutowired();
=======
      builder.RegisterType<GenericDbRepository<Machine, int>>().AsImplementedInterfaces().InstancePerRequest();
      builder.RegisterType<GenericDbRepository<Device, int>>().AsImplementedInterfaces().InstancePerRequest();
      builder.RegisterType<GenericDbRepository<DataValue, int>>().AsImplementedInterfaces().InstancePerRequest();
      builder.RegisterType<GenericDbRepository<ApplicationUser, string>>().AsImplementedInterfaces().InstancePerRequest();
      builder.RegisterType<GenericDbRepository<ApplicationRole, string>>().AsImplementedInterfaces().InstancePerRequest();
      builder.RegisterType<MachineManager>().As<IMachineManager>().InstancePerRequest().PropertiesAutowired();
      builder.RegisterType<AuthenticationManager>().As<IAuthenticationManager>().InstancePerRequest().PropertiesAutowired();
>>>>>>> 2a1a27b5e5d2e80cdc3cb4bc58c16bb62c22512b

      var container = builder.Build();      
      AutofacHostFactory.Container = container;
    }

  }
}