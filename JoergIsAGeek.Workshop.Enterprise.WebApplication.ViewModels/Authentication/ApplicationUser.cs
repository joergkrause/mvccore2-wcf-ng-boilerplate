using System;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels.Authentication
{
  public class ApplicationUser
  {
    public int Id { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Location { get; set; }
    public string UserName { get; set; }

  }
}
