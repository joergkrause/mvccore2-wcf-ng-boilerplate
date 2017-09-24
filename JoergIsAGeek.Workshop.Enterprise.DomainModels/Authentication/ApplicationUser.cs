using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.DomainModels.Authentication
{
  public class ApplicationUser : Microsoft.AspNetCore.Identity.IdentityUser, IEntityBase<string>
  {
    [Column(TypeName = "datetime2")]
    public DateTime CreatedAt { get; set; }

    [Column(TypeName = "datetime2")]
    public DateTime ModifiedAt { get; set; }

    [Required, StringLength(100)]
    public string CreatedBy { get; set; }

    [StringLength(100)]
    public string ModifiedBy { get; set; }
  }
}
