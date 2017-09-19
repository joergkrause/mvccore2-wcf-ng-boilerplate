using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer.Authentication
{
  public class IdentityResult
  {
    public bool Succeeded { get; protected set; }
    public IEnumerable<IdentityError> Errors { get; }

  }
}
