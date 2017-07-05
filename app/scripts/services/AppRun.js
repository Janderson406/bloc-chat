(function() {
  function AppRun(User, currentUser) {
    if (User) {                   /// TO-DO: WORKING ON NOT LOADING LOG-IN MODAL IF ALREADY SIGNED IN
      User.openSetUsernameModal();
    }
  }

  angular
    .module('blocChat')
    .run(['User',AppRun]);
})();
