using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JoergIsAGeek.Workshop.Enterprise.DomainModels;
using JoergIsAGeek.Workshop.Enterprise.DomainModels.Authentication;

namespace JoergIsAGeek.Workshop.Enterprise.DataAccessLayer {
  public class MachineDataContext : DbContext {

    public DbSet<Machine> Machines { get; set; }

    public DbSet<Device> Devices { get; set; }

    public DbSet<DataValue> DataValues { get; set; }

    public DbSet<User> Users { get; set; }

    public DbSet<IdentityRole> IdentityRoles { get; set; }

    public override int SaveChanges() {
      return base.SaveChanges();
    }

    protected override void OnModelCreating(DbModelBuilder modelBuilder) {
      base.OnModelCreating(modelBuilder);
      //modelBuilder.Configurations.Add()
    }

  }
}
