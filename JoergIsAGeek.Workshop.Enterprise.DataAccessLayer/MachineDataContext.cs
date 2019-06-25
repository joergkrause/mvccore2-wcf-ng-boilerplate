using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JoergIsAGeek.Workshop.Enterprise.DomainModels;
using JoergIsAGeek.Workshop.Enterprise.DomainModels.Authentication;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace JoergIsAGeek.Workshop.Enterprise.DataAccessLayer
{

  /// <summary>
  /// The main context for working data and authentication.
  /// The Autfac cotainer shall deliver the options for config.
  /// </summary>
  public class MachineDataContext : IdentityDbContext
  {

    private IUserContextProvider contextProvider;

    public MachineDataContext(DbContextOptions<DbContext> options, IUserContextProvider contextProvider) : base(options)
    {
      // forward of the user identity
      this.contextProvider = contextProvider;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      base.OnConfiguring(optionsBuilder);
    }

    public DbSet<Machine> Machines { get; set; }

    public DbSet<Device> Devices { get; set; }

    public DbSet<DataValue> DataValues { get; set; }

    public override int SaveChanges()
    {
      this.SaveInterceptor(this.contextProvider?.UserIdentity?.Name);
      return base.SaveChanges();
    }

    private void SaveInterceptor(string contextUser)
    {
      var timeStamp = DateTime.Now.ToUniversalTime();
      var trackedItems = ChangeTracker.Entries<IAuditableEntityBase>();
      foreach (var item in trackedItems)
      {
        switch (item.State)
        {
          case EntityState.Added:
            item.Entity.CreatedAt = timeStamp;
            item.Entity.CreatedBy = contextUser ?? "TestUser";
            goto case EntityState.Modified;
          case EntityState.Modified:
            item.Entity.ModifiedAt = timeStamp;
            item.Entity.ModifiedBy = contextUser ?? "TestUser";
            break;
        }
      }
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      base.OnModelCreating(builder);

      builder.Entity<IdentityUser>().ToTable("Users", "identity").Property(p => p.Id).HasColumnName("UserId");
      builder.Entity<ApplicationUser>().ToTable("Users", "identity").Property(p => p.Id).HasColumnName("UserId");
      builder.Entity<IdentityUserRole<string>>().ToTable("Users_x_Roles", "identity");
      builder.Entity<IdentityUserLogin<string>>().ToTable("User_Logins", "identity");
      builder.Entity<IdentityUserClaim<string>>().ToTable("User_Claims", "identity");
      builder.Entity<IdentityRole>().ToTable("Roles", "identity");
      builder.Entity<ApplicationRole>().ToTable("Roles", "identity");
      builder.Entity<IdentityUserToken<string>>().ToTable("User_Token", "identity");
      builder.Entity<IdentityRoleClaim<string>>().ToTable("Roles_x_Claims", "identity");

      builder.Entity<ApplicationUser>()
        .Property(u => u.Id).IsUnicode(false);

      builder.Entity<ApplicationUser>()
        .Property(u => u.Email).IsUnicode(false);

      builder.Entity<ApplicationRole>()
        .Property(u => u.Id).IsUnicode(false);

      builder.Entity<IdentityUser<string>>()
        .Property(ur => ur.Id).HasColumnType("char(32)");

      builder.Entity<IdentityRole<string>>()
        .Property(ur => ur.Id).HasColumnType("char(32)");

      builder.Entity<IdentityUserLogin<string>>()
        .Property(ur => ur.UserId).HasColumnType("char(32)");

      builder.Entity<IdentityUserRole<string>>()
        .HasKey(r => new { r.UserId, r.RoleId });

      builder.Entity<IdentityUserClaim<string>>()
        .HasKey(r => r.Id);

      builder.Entity<IdentityRoleClaim<string>>()
        .HasKey(r => r.Id);

      builder.Entity<IdentityUserRole<string>>()
        .Property(ur => ur.RoleId).HasColumnType("char(32)");

      builder.Entity<IdentityUserRole<string>>()
        .Property(ur => ur.UserId).HasColumnType("char(32)");

      builder.Entity<ApplicationUser>()
          .HasMany(e => e.Claims)
          .WithOne()
          .HasForeignKey(e => e.UserId)
          .IsRequired()
          .OnDelete(DeleteBehavior.Restrict);

      builder.Entity<ApplicationUser>()
          .HasMany(e => e.Logins)
          .WithOne()
          .HasForeignKey(e => e.UserId)
          .IsRequired()
          .OnDelete(DeleteBehavior.Cascade);
      
    }


  }
}
