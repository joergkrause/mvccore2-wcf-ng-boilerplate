using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Configuration;

namespace JoergIsAGeek.Workshop.UnitTests.DataAccessLayer {

  [TestClass]
  public class InitializerByTest {

    private DbContextOptions GetOptions()
    {
      var optionBuilder = new DbContextOptionsBuilder();
      optionBuilder.UseSqlServer(ConfigurationManager.ConnectionStrings[nameof(MachineDataContext)].ConnectionString);
      var options = optionBuilder.Options;
      return options;
    }

    [TestInitialize]
    public void TestInitialize() {
      var init = new DatabaseInitializer();
      using (var context = new MachineDataContext(GetOptions()))
      {
        context.Database.EnsureDeleted();
        context.Database.EnsureCreated();
        init.Seed(context);
      } // Dispose
    }

    [TestMethod]
    public void TestToCreateDatebase() {
      using (var context = new MachineDataContext(GetOptions()))
      {
        var machines = context.Machines.ToList();
        Assert.IsNotNull(machines);
        var count = context.Machines.Count();
        Assert.AreEqual(1, count);
      } // Dispose
    }



  }
}
