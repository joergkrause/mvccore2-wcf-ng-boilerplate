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

    private IAuthenticationManager _authenticationManager;

    public AuthenticationService(IAuthenticationManager authenticationManager)
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

    public IdentityRoleDto FindRoleById(int roleId)
    {
      return _authenticationManager.FindRoleById(roleId);
    }

    public IdentityRoleDto FindRoleByName(string normalizedRoleName)
    {
      return _authenticationManager.FindRoleByName(normalizedRoleName);
    }

    public UserDto FindUserById(int userId)
    {
      return _authenticationManager.FindUserById(userId);
    }

    public UserDto FindUserByName(string normalizedUserName)
    {
      return _authenticationManager.FindUserByName(normalizedUserName);
    }

    public int GetIdentityRoleDtoId(IdentityRoleDto role)
    {
      return _authenticationManager.GetIdentityRoleDtoId(role);
    }

    public string GetIdentityRoleDtoName(IdentityRoleDto role)
    {
      return _authenticationManager.GetIdentityRoleDtoName(role);
    }

    public string GetNormalizedRoleName(IdentityRoleDto role)
    {
      return _authenticationManager.GetNormalizedRoleName(role);
    }

    public string GetNormalizedUserName(UserDto user)
    {
      return _authenticationManager.GetNormalizedUserName(user);
    }

    public int GetUserDtoId(UserDto user)
    {
      return _authenticationManager.GetUserDtoId(user);
    }

    public string GetUserDtoName(UserDto user)
    {
      return _authenticationManager.GetUserDtoName(user);
    }

    public void SeIdentityRoleDtoName(IdentityRoleDto role, string roleName)
    {
      _authenticationManager.SeIdentityRoleDtoName(role, roleName);
    }

    public void SetNormalizedRoleName(IdentityRoleDto role, string normalizedName)
    {
      _authenticationManager.SetNormalizedRoleName(role, normalizedName);
    }

    public void SetNormalizedUserName(UserDto user, string normalizedName)
    {
      _authenticationManager.SetNormalizedUserName(user, normalizedName);
    }

    public void SeUserDtoName(UserDto user, string userName)
    {
      _authenticationManager.SeUserDtoName(user, userName);
    }

    public IdentityResult UpdateRole(IdentityRoleDto role)
    {
      return _authenticationManager.UpdateRole(role);
    }

    public IdentityResult UpdateUser(UserDto user)
    {
      return _authenticationManager.UpdateUser(user);
    }

    public string GetPasswordHash(UserDto userDto)
    {
      return _authenticationManager.GetPasswordHash(userDto);
    }

    public bool HasPassword(UserDto userDto)
    {
      return _authenticationManager.HasPassword(userDto);
    }

    public void SetPasswordHash(UserDto userDto, string passwordHash)
    {
      _authenticationManager.SetPasswordHash(userDto, passwordHash);
    }

    public UserDto FindByEmail(string normalizedEmail)
    {
      return _authenticationManager.FindByEmail(normalizedEmail);
    }

    public string GetEmail(UserDto user)
    {
      return _authenticationManager.GetEmail(user);
    }

    public bool GetEmailConfirmed(UserDto user)
    {
      return _authenticationManager.GetEmailConfirmed(user);
    }

    public string GetNormalizedEmail(UserDto user)
    {
      return _authenticationManager.GetNormalizedEmail(user);
    }

    public void SetEmail(UserDto user, string email)
    {
      _authenticationManager.SetEmail(user, email);
    }

    public void SetEmailConfirmed(UserDto user, bool confirmed)
    {
      _authenticationManager.SetEmailConfirmed(user, confirmed);
    }

    public void SetNormalizedEmail(UserDto user, string normalizedEmail)
    {
      _authenticationManager.SetNormalizedEmail(user, normalizedEmail);
    }
  }
}