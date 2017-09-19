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
    Task SetNormalizedUserName(UserDto user, string normalizedName);
    Task SeUserDtoName(UserDto user, string userName);
    IdentityResult UpdateUser(UserDto user);
    IdentityResult CreateRole(IdentityRoleDto role);

    IdentityResult DeleteRole(IdentityRoleDto role);

    IdentityRoleDto FindRoleById(string roleId);

    IdentityRoleDto FindRoleByName(string normalizedRoleName);

    string GetNormalizedRoleName(IdentityRoleDto role);

    string GeIdentityRoleDtoId(IdentityRoleDto role);

    string GeIdentityRoleDtoName(IdentityRoleDto role);

    Task SetNormalizedRoleName(IdentityRoleDto role, string normalizedName);

    Task SeIdentityRoleDtoName(IdentityRoleDto role, string roleName);

    IdentityResult UpdateRole(IdentityRoleDto role);
  }
}
