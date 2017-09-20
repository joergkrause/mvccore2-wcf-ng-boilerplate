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

    public IdentityRoleDto FindRoleById(string roleId)
    {
      return _authenticationManager.FindRoleById(roleId);
    }

    public IdentityRoleDto FindRoleByName(string normalizedRoleName)
    {
      return _authenticationManager.FindRoleByName(normalizedRoleName);
    }

    public UserDto FindUserById(string userId)
    {
      return _authenticationManager.FindUserById(userId);
    }

    public UserDto FindUserByName(string normalizedUserName)
    {
      return _authenticationManager.FindUserByName(normalizedUserName);
    }

    public string GeIdentityRoleDtoId(IdentityRoleDto role)
    {
      return _authenticationManager.GeIdentityRoleDtoName(role);
    }

    public string GeIdentityRoleDtoName(IdentityRoleDto role)
    {
      return _authenticationManager.GeIdentityRoleDtoName(role);
    }

    public string GetNormalizedRoleName(IdentityRoleDto role)
    {
      return _authenticationManager.GetNormalizedRoleName(role);
    }

    public string GetNormalizedUserName(UserDto user)
    {
      return _authenticationManager.GetNormalizedUserName(user);
    }

    public string GeUserDtoId(UserDto user)
    {
      return _authenticationManager.GeUserDtoId(user);
    }

    public string GeUserDtoName(UserDto user)
    {
      return _authenticationManager.GeUserDtoName(user);
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

    public string GetPasswordHashAsync(UserDto userDto)
    {
      return _authenticationManager.GetPasswordHashAsync(userDto);
    }

    public bool HasPasswordAsync(UserDto userDto)
    {
      return _authenticationManager.HasPasswordAsync(userDto);
    }

    public void SetPasswordHashAsync(UserDto userDto, string passwordHash)
    {
      _authenticationManager.SetPasswordHashAsync(userDto, passwordHash);
    }

    public UserDto FindByEmailAsync(string normalizedEmail)
    {
      return _authenticationManager.FindByEmailAsync(normalizedEmail);
    }

    public string GetEmailAsync(UserDto user)
    {
      return _authenticationManager.GetEmailAsync(user);
    }

    public bool GetEmailConfirmedAsync(UserDto user)
    {
      return _authenticationManager.GetEmailConfirmedAsync(user);
    }

    public string GetNormalizedEmailAsync(UserDto user)
    {
      return _authenticationManager.GetNormalizedEmailAsync(user);
    }

    public void SetEmailAsync(UserDto user, string email)
    {
      _authenticationManager.SetEmailAsync(user, email);
    }

    public void SetEmailConfirmedAsync(UserDto user, bool confirmed)
    {
      _authenticationManager.SetEmailConfirmedAsync(user, confirmed);
    }

    public void SetNormalizedEmailAsync(UserDto user, string normalizedEmail)
    {
      _authenticationManager.SetNormalizedEmailAsync(user, normalizedEmail);
    }
  }
}