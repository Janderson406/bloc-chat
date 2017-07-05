(function() {
  function UserCtrl($uibModalInstance, $cookies, $state, User) {
    var user = this;

    user.register = function () {
      User.register(user);
      $uibModalInstance.close(user.username);
    };

    user.login = function () {
      User.login(user);
      $uibModalInstance.close(user.username);
    };

    user.logout = function () {
      User.logout();
    };
  }

  angular
      .module('blocChat')
      .controller('UserCtrl', ['$uibModalInstance', '$cookies', '$state', 'User', UserCtrl]);
})();
