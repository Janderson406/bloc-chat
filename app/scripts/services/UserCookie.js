(function() {
  function UserCookie($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: '/templates/user.html',
        controller: 'UserCtrl',
        controllerAs: 'user',
        size: 'md',
        backdrop: 'static',
      })
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', UserCookie]);
})();
