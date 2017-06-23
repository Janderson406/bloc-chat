(function() {
  function UserCtrl($uibModalInstance, $cookies, $state) {
    var user = this;

    user.addUsername = function () {
      $uibModalInstance.close(user.username);
    };
  }

  angular
      .module('blocChat')
      .controller('UserCtrl', ['$uibModalInstance', '$cookies', '$state', UserCtrl]);
})();
