using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer;
using JoergIsAGeek.Workshop.UnitTests.DataAccessLayer;
using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer;
using Microsoft.EntityFrameworkCore;

namespace JoergIsAGeek.Workshop.Enterprise.TestConsole {
  class Program {
    static void Main(string[] args) {

      var machineManager = new MachineManager();
      var result = machineManager.GetMachineForDataValue(1000);
      foreach (var item in result) {
        Console.WriteLine($"{item.Name} ({item.Id})");
      }
      Console.ReadLine();
    }

    public void TestInitialize()
    {
      var init = new DatabaseInitializer();
      using (var context = new MachineDataContext(GetOptions()))
      {
        context.Database.EnsureDeleted();
        context.Database.EnsureCreated();
        init.Seed(context);
      } // Dispose
    }

    public void TestToCreateDatebase()
    {
      using (var context = new MachineDataContext(GetOptions()))
      {
        var machines = context.Machines.ToList();
        var count = context.Machines.Count();
        Console.WriteLine(count);
      } // Dispose
    }

    private string GetCs()
    {
      var cs = @"Data Source=(localdb)\JoergIsAGeek;Initial Catalog=MachineDataDatabase;Integrated Security=True;MultipleActiveResultSets=True;Connect Timeout=30";
      return cs;
    }

    private DbContextOptions<MachineDataContext> GetOptions()
    {
      var optionBuilder = new DbContextOptionsBuilder<MachineDataContext>();
      optionBuilder.UseSqlServer(GetCs());
      return optionBuilder.Options;
    }
  }
}
