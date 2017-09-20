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
    UserDto FindUserById(int userId);
    [OperationContract]
    UserDto FindUserByName(string normalizedUserName);
    [OperationContract]
    string GetNormalizedUserName(UserDto user);
    [OperationContract]
    int GetUserDtoId(UserDto user);
    [OperationContract]
    string GetUserDtoName(UserDto user);
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
    IdentityRoleDto FindRoleById(int roleId);

    [OperationContract]
    IdentityRoleDto FindRoleByName(string normalizedRoleName);

    [OperationContract]
    string GetNormalizedRoleName(IdentityRoleDto role);

    [OperationContract]
    int GetIdentityRoleDtoId(IdentityRoleDto role);

    [OperationContract]
    string GetIdentityRoleDtoName(IdentityRoleDto role);

    [OperationContract]
    void SetNormalizedRoleName(IdentityRoleDto role, string normalizedName);

    [OperationContract]
    void SeIdentityRoleDtoName(IdentityRoleDto role, string roleName);

    [OperationContract]
    IdentityResult UpdateRole(IdentityRoleDto role);

    [OperationContract]
    string GetPasswordHash(UserDto userDto);

    [OperationContract]
    bool HasPassword(UserDto userDto);

    [OperationContract]
    void SetPasswordHash(UserDto userDto, string passwordHash);

    [OperationContract]
    UserDto FindByEmail(string normalizedEmail);

    [OperationContract]
    string GetEmail(UserDto user);

    [OperationContract]
    bool GetEmailConfirmed(UserDto user);

    [OperationContract]
    string GetNormalizedEmail(UserDto user);

    [OperationContract]
    void SetEmail(UserDto user, string email);

    [OperationContract]
    void SetEmailConfirmed(UserDto user, bool confirmed);

    [OperationContract]
    void SetNormalizedEmail(UserDto user, string normalizedEmail);
  }
}
