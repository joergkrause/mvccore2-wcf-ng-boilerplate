using System;


public interface IType { }
public interface ISType { }
public interface IIType { }
public interface IBType { }
public interface IDType { }

public class StringClass : IType, ISType { }
public class IntClass : IType { }
public class BoolClass : IType { }
public class DoubleClass : IType { }

public class Class1
{

  ISType sc;
  IntClass ic;

  public Class1(ISType sc, IType ic)
  {
    this.sc = sc;
    this.ic = ic;
  }

  public object Execute(string v)
  {
    sc.Init();
    IType type;
    switch (v)
    {
      case "s":
        type = sc;
        break;
      case "i":
        break;
      case "b":
        break;
      case "d":
        break;
    }
    return type;
  }

}
