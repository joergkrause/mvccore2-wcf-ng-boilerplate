using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer;

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
  }
}
