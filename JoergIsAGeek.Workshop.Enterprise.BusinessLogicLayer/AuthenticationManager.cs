using JoergIsAGeek.Workshop.Enterprise.DomainModels.Authentication;
using JoergIsAGeek.Workshop.Enterprise.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer.Authentication;
using JoergIsAGeek.Workshop.Enterprise.DataTransferObjects.Authentication;
using AutoMapper;

namespace JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer
{
  public class AuthenticationManager : Manager, IAuthenticationManager
  {

    private IGenericRepository<User, string> repUsers;
    private IGenericRepository<IdentityRole, string> repRoles;

    public AuthenticationManager()
    {
      var mapperConfiguration = new MapperConfiguration(configure =>
      {
        configure.CreateMap<User, UserDto>();
        configure.CreateMap<UserDto, User>();
        configure.CreateMap<IdentityRole, IdentityRoleDto>();
        configure.CreateMap<IdentityRoleDto, IdentityRole>();
      });
      mapper = mapperConfiguration.CreateMapper();
    }

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

    public IdentityResult CreateRole(IdentityRoleDto roleDto)
    {
      if (repRoles.InsertOrUpdate(mapper.Map<IdentityRole>(roleDto)))
      {
        return IdentityResult.GetSucceded();
      } else
      {
        return IdentityResult.GetError();
      }
    }

    public IdentityResult CreateUser(UserDto userDto)
    {
      if (repUsers.InsertOrUpdate(mapper.Map<User>(userDto)))
      {
        return IdentityResult.GetSucceded();
      }
      else
      {
        return IdentityResult.GetError();
      }
    }

    public IdentityResult DeleteRole(IdentityRoleDto roleDto)
    {
      if (repRoles.Delete(mapper.Map<IdentityRole>(roleDto)))
      {
        return IdentityResult.GetSucceded();
      }
      else
      {
        return IdentityResult.GetError();
      }
    }

    public IdentityRoleDto FindRoleById(string roleId)
    {
      return mapper.Map<IdentityRoleDto>(RepRoles.Find(roleId));
    }

    public IdentityRoleDto FindRoleByName(string normalizedRoleName)
    {
      var role = RepRoles.Read(r => r.Name == normalizedRoleName).FirstOrDefault();
      return role == null ? null : mapper.Map<IdentityRoleDto>(role);
    }

    public UserDto FindUserById(string userId)
    {
      return mapper.Map<UserDto>(RepUsers.Find(userId));
    }

    public UserDto FindUserByName(string normalizedUserName)
    {
      var user = RepUsers.Read(u => u.UserName == normalizedUserName).FirstOrDefault();
      return user == null ? null : mapper.Map<UserDto>(user);
    }

    public string GeIdentityRoleDtoId(IdentityRoleDto roleDto)
    {
      var role = repRoles.Read(r => r.Id == roleDto.Id || r.Name == roleDto.Name).FirstOrDefault();
      return role == null ? null : role.Id;
    }

    public string GeIdentityRoleDtoName(IdentityRoleDto roleDto)
    {
      var role = repRoles.Read(r => r.Id == roleDto.Id || r.Name == roleDto.Name).FirstOrDefault();
      return role == null ? null : role.Name;
    }

    public string GetNormalizedRoleName(IdentityRoleDto roleDto)
    {
      var role = repRoles.Read(r => r.Id == roleDto.Id || r.Name == roleDto.Name).FirstOrDefault();
      return role == null ? null : role.Name.Trim();
    }

    public string GetNormalizedUserName(UserDto userDto)
    {
      var user = repUsers.Read(r => r.Id == userDto.Id || r.UserName == userDto.UserName).FirstOrDefault();
      return user == null ? null : user.UserName.Trim();
    }

    public string GeUserDtoId(UserDto user)
    {
      return user.Id;
    }

    public string GeUserDtoName(UserDto user)
    {
      return user.UserName;
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
      user.UserName = userName;
    }

    public IdentityResult UpdateRole(IdentityRoleDto roleDto)
    {
      if (repRoles.InsertOrUpdate(mapper.Map<IdentityRole>(roleDto)))
      {
        return IdentityResult.GetSucceded();
      }
      else
      {
        return IdentityResult.GetError();
      }
    }

    public IdentityResult UpdateUser(UserDto userDto)
    {
      if (repUsers.InsertOrUpdate(mapper.Map<User>(userDto)))
      {
        return IdentityResult.GetSucceded();
      }
      else
      {
        return IdentityResult.GetError();
      }
    }
  }
}
