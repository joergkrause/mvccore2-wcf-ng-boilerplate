using JoergIsAGeek.Workshop.Enterprise.DomainModels.Authentication;
using JoergIsAGeek.Workshop.Enterprise.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer.Authentication;
using JoergIsAGeek.Workshop.Enterprise.DataTransferObjects.Authentication;

namespace JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer
{
  public class AuthenticationManager : Manager, IAuthenticationManager
  {

    private IGenericRepository<User, string> repUsers;
    private IGenericRepository<IdentityRole, string> repRoles;

    public IGenericRepository<User, string> RepUsers {
      protected get {
        return repUsers;
      }
      set {
        repUsers = value;
      }
    }
    public IGenericRepository<IdentityRole, string> RepRoles{
      protected get {
        return repRoles;
      }
      set {
        repRoles = value;
      }
    }

    public IdentityResult CreateRole(IdentityRoleDto role)
    {
      throw new NotImplementedException();
    }

    public IdentityResult CreateUser(UserDto user)
    {
      throw new NotImplementedException();
    }

    public IdentityResult DeleteRole(IdentityRoleDto role)
    {
      throw new NotImplementedException();
    }

    public IdentityRoleDto FindRoleById(string roleId)
    {
      throw new NotImplementedException();
    }

    public IdentityRoleDto FindRoleByName(string normalizedRoleName)
    {
      throw new NotImplementedException();
    }

    public UserDto FindUserById(string userId)
    {
      throw new NotImplementedException();
    }

    public UserDto FindUserByName(string normalizedUserName)
    {
      throw new NotImplementedException();
    }

    public string GeIdentityRoleDtoId(IdentityRoleDto role)
    {
      throw new NotImplementedException();
    }

    public string GeIdentityRoleDtoName(IdentityRoleDto role)
    {
      throw new NotImplementedException();
    }

    public string GetNormalizedRoleName(IdentityRoleDto role)
    {
      throw new NotImplementedException();
    }

    public string GetNormalizedUserName(UserDto user)
    {
      throw new NotImplementedException();
    }

    public string GeUserDtoId(UserDto user)
    {
      throw new NotImplementedException();
    }

    public string GeUserDtoName(UserDto user)
    {
      throw new NotImplementedException();
    }

    public Task SeIdentityRoleDtoName(IdentityRoleDto role, string roleName)
    {
      throw new NotImplementedException();
    }

    public Task SetNormalizedRoleName(IdentityRoleDto role, string normalizedName)
    {
      throw new NotImplementedException();
    }

    public Task SetNormalizedUserName(UserDto user, string normalizedName)
    {
      throw new NotImplementedException();
    }

    public Task SeUserDtoName(UserDto user, string userName)
    {
      throw new NotImplementedException();
    }

    public IdentityResult UpdateRole(IdentityRoleDto role)
    {
      throw new NotImplementedException();
    }

    public IdentityResult UpdateUser(UserDto user)
    {
      throw new NotImplementedException();
    }
  }
}
