using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer.Authentication;
using JoergIsAGeek.Workshop.Enterprise.DataTransferObjects.Authentication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Text;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.ServiceLayer
{
  [ServiceContract(Name = "AuthSrv", Namespace = "http://www.joergkrause.de/srv")]
  public interface IAuthenticationService
  {
    [OperationContract]
    IdentityResult CreateUser(UserDto user);
    [OperationContract]
    UserDto FindUserById(string userId);
    [OperationContract]
    UserDto FindUserByName(string normalizedUserName);
    [OperationContract]
    string GetNormalizedUserName(UserDto user);
    [OperationContract]
    string GeUserDtoId(UserDto user);
    [OperationContract]
    string GeUserDtoName(UserDto user);
    [OperationContract]
    void SetNormalizedUserName(UserDto user, string normalizedName);
    [OperationContract]
    void SeUserDtoName(UserDto user, string userName);
    [OperationContract]
    IdentityResult UpdateUser(UserDto user);
    [OperationContract]
    IdentityResult CreateRole(IdentityRoleDto role);

    [OperationContract]
    IdentityResult DeleteRole(IdentityRoleDto role);

    [OperationContract]
    IdentityRoleDto FindRoleById(string roleId);

    [OperationContract]
    IdentityRoleDto FindRoleByName(string normalizedRoleName);

    [OperationContract]
    string GetNormalizedRoleName(IdentityRoleDto role);

    [OperationContract]
    string GeIdentityRoleDtoId(IdentityRoleDto role);

    [OperationContract]
    string GeIdentityRoleDtoName(IdentityRoleDto role);

    [OperationContract]
    void SetNormalizedRoleName(IdentityRoleDto role, string normalizedName);

    [OperationContract]
    void SeIdentityRoleDtoName(IdentityRoleDto role, string roleName);

    [OperationContract]
    IdentityResult UpdateRole(IdentityRoleDto role);

    [OperationContract]
    string GetPasswordHashAsync(UserDto userDto);

    [OperationContract]
    bool HasPasswordAsync(UserDto userDto);

    [OperationContract]
    void SetPasswordHashAsync(UserDto userDto, string passwordHash);

    [OperationContract]
    UserDto FindByEmailAsync(string normalizedEmail);

    [OperationContract]
    string GetEmailAsync(UserDto user);

    [OperationContract]
    bool GetEmailConfirmedAsync(UserDto user);

    [OperationContract]
    string GetNormalizedEmailAsync(UserDto user);

    [OperationContract]
    void SetEmailAsync(UserDto user, string email);

    [OperationContract]
    void SetEmailConfirmedAsync(UserDto user, bool confirmed);

    [OperationContract]
    void SetNormalizedEmailAsync(UserDto user, string normalizedEmail);
  }
}
