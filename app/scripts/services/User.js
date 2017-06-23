(function() {
  function User($cookies, $uibModal) {
    var User = {};

    User.openSetUsernameModal = openSetUsernameModal;
    User.setUsername = setUsername;
    User.data = {};
    User.data.username = $cookies.get('blocChatCurrentUser');

    function openSetUsernameModal() {
      var currentUser = $cookies.get('blocChatCurrentUser');
      if (!currentUser || currentUser === '') {
        var modalInstance = $uibModal.open({
          templateUrl: '/templates/user.html',
          controller: 'UserCtrl',
          controllerAs: 'user',
          size: 'md',
          backdrop: 'static',
        })

        modalInstance.result.then(function (name) {
          setUsername(name);
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
      }
    }

    function setUsername(name) {
      $cookies.put('blocChatCurrentUser', name);
      User.data.username = name;
      console.log(name);
    }

    return User;
  }

  angular
    .module('blocChat')
    .factory('User', ['$cookies', '$uibModal', User]);
})();
