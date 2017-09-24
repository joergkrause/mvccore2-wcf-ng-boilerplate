using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer;
using System.Linq;

namespace JoergIsAGeek.Workshop.UnitTests.DataAccessLayer {

  [TestClass]
  public class InitializerByTest {

    [TestInitialize]
    public void TestInitialize() {
      var init = new DatabaseInitializer();
      using (var context = new MachineDataContext())
      {
        context.Database.EnsureDeleted();
        context.Database.EnsureCreated();
        init.Seed(context);
      } // Dispose
    }

    [TestMethod]
    public void TestMachines() {
      using (var context = new MachineDataContext()) {
        var machines = context.Machines.ToList();
        Assert.IsNotNull(machines);
        var count = context.Machines.Count();
        Assert.AreEqual(1, count);
      } // Dispose
    }



  }
}
