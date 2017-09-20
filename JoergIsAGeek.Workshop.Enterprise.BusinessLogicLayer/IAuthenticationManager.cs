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
    UserDto FindUserById(int userId);
    UserDto FindUserByName(string normalizedUserName);
    string GetNormalizedUserName(UserDto user);
    int GetUserDtoId(UserDto user);
    string GetUserDtoName(UserDto user);
    void SetNormalizedUserName(UserDto user, string normalizedName);
    void SeUserDtoName(UserDto user, string userName);
    IdentityResult UpdateUser(UserDto user);
    IdentityResult CreateRole(IdentityRoleDto role);

    IdentityResult DeleteRole(IdentityRoleDto role);

    IdentityRoleDto FindRoleById(int roleId);

    IdentityRoleDto FindRoleByName(string normalizedRoleName);

    string GetNormalizedRoleName(IdentityRoleDto role);

    int GetIdentityRoleDtoId(IdentityRoleDto role);

    string GetIdentityRoleDtoName(IdentityRoleDto role);

    void SetNormalizedRoleName(IdentityRoleDto role, string normalizedName);

    void SeIdentityRoleDtoName(IdentityRoleDto role, string roleName);

    IdentityResult UpdateRole(IdentityRoleDto role);
    string GetPasswordHash(UserDto userDto);

    bool HasPassword(UserDto userDto);

    void SetPasswordHash(UserDto userDto, string passwordHash);

    UserDto FindByEmail(string normalizedEmail);
   
    string GetEmail(UserDto user);
    
    bool GetEmailConfirmed(UserDto user);

    string GetNormalizedEmail(UserDto user);
    
    void SetEmail(UserDto user, string email);

    void SetEmailConfirmed(UserDto user, bool confirmed);

    void SetNormalizedEmail(UserDto user, string normalizedEmail);

  }
}
