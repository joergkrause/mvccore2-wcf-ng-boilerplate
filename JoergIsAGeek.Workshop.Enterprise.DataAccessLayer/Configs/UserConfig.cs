using JoergIsAGeek.Workshop.Enterprise.DomainModels.Authentication;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.DataAccessLayer.Configs
{
  internal class UserConfig : IEntityTypeConfiguration<ApplicationUser>
  {
    public UserConfig()
    {
    }

    public void Configure(EntityTypeBuilder<ApplicationUser> builder)
    {
      builder.HasKey(e => e.Id);
    }
  }
}
