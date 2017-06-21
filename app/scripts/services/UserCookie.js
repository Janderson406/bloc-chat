(function() {
  function UserCookie($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        // animation: user.animationsEnabled,
        templateUrl: '/templates/user.html',
        controller: 'UserCtrl',
        controllerAs: 'user',
        size: 'sm',
      })
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', UserCookie]);
})();
