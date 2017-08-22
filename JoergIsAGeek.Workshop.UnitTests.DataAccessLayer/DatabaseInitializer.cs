using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JoergIsAGeek.Workshop.Enterprise.DataAccessLayer;
using JoergIsAGeek.Workshop.Enterprise.DomainModels;

namespace JoergIsAGeek.Workshop.UnitTests.DataAccessLayer {
  internal class DatabaseInitializer : DropCreateDatabaseAlways<MachineDataContext> {

    protected override void Seed(MachineDataContext context) {
      base.Seed(context);
      var machine = new Machine {
        Name = "M1",
        Location = "A-100"
      };
      var device1 = new Device {
        Name = "BG A"
      };
      var device2 = new Device {
        Name = "BG B"
      };
      var v1 = new DataValue { Value = 123.5, Unit = "V" };
      var v2 = new DataValue { Value = 43, Unit = "V" };
      var v3 = new DataValue { Value = 230, Unit = "V" };
      var v4 = new DataValue { Value = 380, Unit = "V" };
      var v5 = new DataValue { Value = 0.005, Unit = "A" };

      machine.Devices.Add(device1);
      machine.Devices.Add(device2);
      device1.DataValues.Add(v1);
      device1.DataValues.Add(v2);
      device2.DataValues.Add(v3);
      device2.DataValues.Add(v4);
      device2.DataValues.Add(v5);

      context.Machines.Add(machine);
      context.SaveChanges();

    }

  }
}
