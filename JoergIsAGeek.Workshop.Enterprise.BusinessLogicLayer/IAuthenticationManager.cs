using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer.Authentication;
using JoergIsAGeek.Workshop.Enterprise.DataTransferObjects.Authentication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer
{
  public interface IAuthenticationManager
  {
    IdentityResult CreateUser(UserDto user);
    UserDto FindUserById(string userId);
    UserDto FindUserByName(string normalizedUserName);
    string GetNormalizedUserName(UserDto user);
    string GeUserDtoId(UserDto user);
    string GeUserDtoName(UserDto user);
    void SetNormalizedUserName(UserDto user, string normalizedName);
    void SeUserDtoName(UserDto user, string userName);
    IdentityResult UpdateUser(UserDto user);
    IdentityResult CreateRole(IdentityRoleDto role);

    IdentityResult DeleteRole(IdentityRoleDto role);

    IdentityRoleDto FindRoleById(string roleId);

    IdentityRoleDto FindRoleByName(string normalizedRoleName);

    string GetNormalizedRoleName(IdentityRoleDto role);

    string GeIdentityRoleDtoId(IdentityRoleDto role);

    string GeIdentityRoleDtoName(IdentityRoleDto role);

    void SetNormalizedRoleName(IdentityRoleDto role, string normalizedName);

    void SeIdentityRoleDtoName(IdentityRoleDto role, string roleName);

    IdentityResult UpdateRole(IdentityRoleDto role);
    string GetPasswordHashAsync(UserDto userDto);

    bool HasPasswordAsync(UserDto userDto);

    void SetPasswordHashAsync(UserDto userDto, string passwordHash);

    UserDto FindByEmailAsync(string normalizedEmail);
   
    string GetEmailAsync(UserDto user);
    
    bool GetEmailConfirmedAsync(UserDto user);

    string GetNormalizedEmailAsync(UserDto user);
    
    void SetEmailAsync(UserDto user, string email);

    void SetEmailConfirmedAsync(UserDto user, bool confirmed);

    void SetNormalizedEmailAsync(UserDto user, string normalizedEmail);

  }
}
