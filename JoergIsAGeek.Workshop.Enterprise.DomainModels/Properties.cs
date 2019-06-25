using System.ComponentModel.DataAnnotations.Schema;

namespace JoergIsAGeek.Workshop.Enterprise.DomainModels
{

  [ComplexType]
  public class Properties
  {
    public int MyProperty { get; set; }

    public int MyProperty2 { get; set; }
  }
}