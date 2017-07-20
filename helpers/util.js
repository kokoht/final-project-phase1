module.exports = {
  manageRole(role) {
    let option = [];
    switch (role) {
      case "user":
        option = ["dashboard", "users"]
        return option
        break;
      case "event":
        option = ["dashboard", "events"]
        return option
        break;
      default:
        return "dashboard"
    }
  }
};
