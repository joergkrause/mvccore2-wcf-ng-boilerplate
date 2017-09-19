using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;
using JoergIsAGeek.Workshop.Enterprise.DomainModels;
using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer;
using JoergIsAGeek.Workshop.Enterprise.DataTransferObjects;
using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer.Authentication;
using JoergIsAGeek.Workshop.Enterprise.DataTransferObjects.Authentication;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.ServiceLayer
{

  [ServiceBehavior(InstanceContextMode = InstanceContextMode.PerCall)]
  public class AuthenticationService : IAuthenticationService
  {

    private AuthenticationManager _authenticationManager;

    public AuthenticationService(AuthenticationManager authenticationManager)
    {
      _authenticationManager = authenticationManager;
    }


    public IdentityResult CreateRole(IdentityRoleDto role)
    {
      return _authenticationManager.CreateRole(role);
    }

    public IdentityResult CreateUser(UserDto user)
    {
      return _authenticationManager.CreateUser(user);
    }

    public IdentityResult DeleteRole(IdentityRoleDto role)
    {
      return _authenticationManager.DeleteRole(role);
    }

    public IdentityRoleDto FindRoleById(string roleId)
    {
      return _authenticationManager.FindRoleById(roleId);
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

    public void SeIdentityRoleDtoName(IdentityRoleDto role, string roleName)
    {
      throw new NotImplementedException();
    }

    public void SetNormalizedRoleName(IdentityRoleDto role, string normalizedName)
    {
      throw new NotImplementedException();
    }

    public void SetNormalizedUserName(UserDto user, string normalizedName)
    {
      throw new NotImplementedException();
    }

    public void SeUserDtoName(UserDto user, string userName)
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