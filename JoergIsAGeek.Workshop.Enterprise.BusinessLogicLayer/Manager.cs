using JoergIsAGeek.Workshop.Enterprise.DomainModels;
using JoergIsAGeek.Workshop.Enterprise.Repository;

namespace JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer
{
  public abstract class Manager {

    private IGenericRepository<Machine>   repMachine;
    private IGenericRepository<Device>    repDevice;
    private IGenericRepository<DataValue> repDataValue;

    public Manager() {
    }

    public IGenericRepository<DataValue> RepDataValue {
      protected get {
        return repDataValue;
      }
      set {
        repDataValue = value;
      }
    }
    public IGenericRepository<Device> RepDevice{
      protected get {
        return repDevice;
      }
      set {
        repDevice = value;
      }
    }
    public IGenericRepository<Machine> RepMachine {
      protected get {
        return repMachine;
      }
      set {
        repMachine = value;
      }
    }


  }
}
