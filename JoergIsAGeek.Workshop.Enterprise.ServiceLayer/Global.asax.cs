using Autofac;
using Autofac.Integration.Wcf;
using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer;
using JoergIsAGeek.Workshop.Enterprise.DomainModels;
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

      builder.RegisterType<GenericDbRepository<Machine>>().AsImplementedInterfaces();
      builder.RegisterType<GenericDbRepository<Device>>().AsImplementedInterfaces();
      builder.RegisterType<GenericDbRepository<DataValue>>().AsImplementedInterfaces();

      builder.RegisterType<MachineManager>().As<IMachineManager>().SingleInstance().PropertiesAutowired();

      var container = builder.Build();
      AutofacHostFactory.Container = container;
    }

    protected void Session_Start(object sender, EventArgs e) {

    }

    protected void Application_BeginRequest(object sender, EventArgs e) {

    }

    protected void Application_AuthenticateRequest(object sender, EventArgs e) {

    }

    protected void Application_Error(object sender, EventArgs e) {

    }

    protected void Session_End(object sender, EventArgs e) {

    }

    protected void Application_End(object sender, EventArgs e) {

    }
  }
}