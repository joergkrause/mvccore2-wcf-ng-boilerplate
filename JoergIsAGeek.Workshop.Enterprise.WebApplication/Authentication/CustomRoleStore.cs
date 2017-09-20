using System.Threading;
using System.Threading.Tasks;
using VM = JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels.Authentication;
using ID = Microsoft.AspNetCore.Identity;
using ServiceReference2;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication
{
  internal class CustomRoleStore : ID.IRoleStore<VM.IdentityRole>
  {

    private AuthSrvClient _authSrvClient;

    public CustomRoleStore(AuthSrvClient client)
    {
      _authSrvClient = client;
    }

    public Task<ID.IdentityResult> CreateAsync(VM.IdentityRole role, CancellationToken cancellationToken)
    {
      throw new System.NotImplementedException();
    }

    public Task<ID.IdentityResult> DeleteAsync(VM.IdentityRole role, CancellationToken cancellationToken)
    {
      throw new System.NotImplementedException();
    }

    public void Dispose()
    {
      throw new System.NotImplementedException();
    }

    public Task<VM.IdentityRole> FindByIdAsync(string roleId, CancellationToken cancellationToken)
    {
      throw new System.NotImplementedException();
    }

    public Task<VM.IdentityRole> FindByNameAsync(string normalizedRoleName, CancellationToken cancellationToken)
    {
      throw new System.NotImplementedException();
    }

    public Task<string> GetNormalizedRoleNameAsync(VM.IdentityRole role, CancellationToken cancellationToken)
    {
      throw new System.NotImplementedException();
    }

    public Task<string> GetRoleIdAsync(VM.IdentityRole role, CancellationToken cancellationToken)
    {
      throw new System.NotImplementedException();
    }

    public Task<string> GetRoleNameAsync(VM.IdentityRole role, CancellationToken cancellationToken)
    {
      throw new System.NotImplementedException();
    }

    public Task SetNormalizedRoleNameAsync(VM.IdentityRole role, string normalizedName, CancellationToken cancellationToken)
    {
      throw new System.NotImplementedException();
    }

    public Task SetRoleNameAsync(VM.IdentityRole role, string roleName, CancellationToken cancellationToken)
    {
      throw new System.NotImplementedException();
    }

    public Task<ID.IdentityResult> UpdateAsync(VM.IdentityRole role, CancellationToken cancellationToken)
    {
      throw new System.NotImplementedException();
    }
  }
}