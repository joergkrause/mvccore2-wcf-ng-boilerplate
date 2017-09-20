using Autofac;
using Autofac.Integration.Wcf;
using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer;
using JoergIsAGeek.Workshop.Enterprise.DomainModels;
using JoergIsAGeek.Workshop.Enterprise.DomainModels.Authentication;
using JoergIsAGeek.Workshop.Enterprise.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.SessionState;

namespace JoergIsAGeek.Workshop.Enterprise.ServiceLayer {
  public class Global : System.Web.HttpApplication {

    protected void Application_Start(object sender, EventArgs e) {
      var builder = new ContainerBuilder();

      builder.RegisterType<MachineService>();
      builder.RegisterType<AuthenticationService>();

      builder.RegisterType<GenericDbRepository<Machine, int>>().AsImplementedInterfaces();
      builder.RegisterType<GenericDbRepository<Device, int>>().AsImplementedInterfaces();
      builder.RegisterType<GenericDbRepository<DataValue, int>>().AsImplementedInterfaces();
      builder.RegisterType<GenericDbRepository<User, int>>().AsImplementedInterfaces();
      builder.RegisterType<GenericDbRepository<IdentityRole, int>>().AsImplementedInterfaces();

      builder.RegisterType<MachineManager>().As<IMachineManager>().SingleInstance().PropertiesAutowired();
      builder.RegisterType<AuthenticationManager>().As<IAuthenticationManager>().SingleInstance().PropertiesAutowired();

      var container = builder.Build();
      AutofacHostFactory.Container = container;
    }

  }
}