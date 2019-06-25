using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using JoergIsAGeek.Workshop.Enterprise.WebApplication.Controllers;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication
{
  public class Program
  {
    public static void Main(string[] args)
    {
      var host = new WebHostBuilder()
          .UseStartup<Startup>()
          .Build();
      host.Run();
    }
  }
}
