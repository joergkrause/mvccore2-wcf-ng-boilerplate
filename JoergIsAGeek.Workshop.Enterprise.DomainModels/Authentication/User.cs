using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.DomainModels.Authentication
{
  public class User : EntityBase
  {
    [Required]
    [StringLength(120)]
    public string Email { get; set; }
    [Required]
    [StringLength(100)]
    public string Password { get; set; }
    [Required]
    [StringLength(40)]
    public string FirstName { get; set; }
    [Required]
    [StringLength(50)]
    public string LastName { get; set; }
    [StringLength(80)]
    public string Location { get; set; }

    [StringLength(100)]
    [Required]
    public string UserName { get; set; }
  }
}
