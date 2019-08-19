export const setRoles = role => {
  switch (role) {
    case "User":
      return {
        roleName:"User",
        dashboard:true
      };
    default:
      return null;
  }
};
