namespace IZumtobelWorkshop.Enterprise.BusinessLogicLayer {
  public class Singleton {

    static readonly volatile Manager instance;

    static Manager Get {
      get {        
        if (instance == null) {
          lock (o) {
            if (instance == null) {
              instance = new Manager();
            }
          }
        }
        return instance;
      }
  }
}