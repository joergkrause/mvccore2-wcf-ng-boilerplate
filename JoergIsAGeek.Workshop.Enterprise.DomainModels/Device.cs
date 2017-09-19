using System.Collections.Generic;

namespace JoergIsAGeek.Workshop.Enterprise.DomainModels {


  public class Device : EntityBase<int> {

    public Device() {
      //DataValues = new HashSet<DataValue>();
    }

    public string Name { get; set; }

    public ICollection<DataValue> DataValues { get; set; } = new HashSet<DataValue>();

  }
}