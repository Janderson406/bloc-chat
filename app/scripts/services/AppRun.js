(function() {
  function AppRun(User) {
    User.openSetUsernameModal();
  }

  angular
    .module('blocChat')
    .run(['User',AppRun]);
})();
