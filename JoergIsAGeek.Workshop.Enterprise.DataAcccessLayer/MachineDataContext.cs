using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JoergIsAGeek.Workshop.Enterprise.DomainModels;
using JoergIsAGeek.Workshop.Enterprise.DomainModels.Authentication;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace JoergIsAGeek.Workshop.Enterprise.DataAccessLayer {

  /// <summary>
  /// The main context for working data and authentication.
  /// </summary>
  public class MachineDataContext : IdentityDbContext {

    public DbSet<Machine> Machines { get; set; }

    public DbSet<Device> Devices { get; set; }

    public DbSet<DataValue> DataValues { get; set; }

    public override int SaveChanges() {
      return base.SaveChanges();
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      base.OnModelCreating(builder);
      builder.Entity<ApplicationUser>()
        .Property(u => u.Id).IsUnicode(false);
      builder.Entity<ApplicationUser>()
        .Property(u => u.Email).IsUnicode(false);
      builder.Entity<ApplicationRole>()
        .Property(u => u.Id).IsUnicode(false);
    }


  }
}
