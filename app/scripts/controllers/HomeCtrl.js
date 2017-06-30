(function() {
  function HomeCtrl(Room, Message, $scope, $log, $uibModal, $cookies, $state, $element, $timeout, User) {

    $scope.rooms = Room.all;
    $scope.currentRoom = null;
    $scope.currentUser = User.data;
    $scope.messages = {};
    $scope.you = User.data;
    // $scope.glued = true;




    var reloadPage = function(){window.location.reload();} // reload to force no-cookie modal

    $scope.open = function() {
      var modalInstance = $uibModal.open({
        component: 'newRoom',
        resolve: {
          rooms: function() {
            return $scope.rooms;
          }
        },
      });

      modalInstance.result.then(function(newRoom) {
        Room.add(newRoom);
      }, function() {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    $scope.selectRoom = function(room) {
      $scope.currentRoom = room;
      console.log(room);
      $scope.messages = Message.getByRoomId(room.$id);
    };

    $scope.clearUser = function () { ////
      $cookies.remove('blocChatCurrentUser');
      console.log('removed?');
      reloadPage();
    }

    $scope.createMessage = function(){
      $scope.newMessage.roomId = $scope.currentRoom.$id;
      $scope.newMessage.username = User.data.username;
      $scope.newMessage.sentAt = Date.now();
      Message.send($scope.newMessage);
      $scope.newMessage.content = '';
      //scroll to last child  - thanks @rogie!
      $timeout(function(){
        $element[0].querySelector('.messages-list:last-child').scrollIntoView();
      });
    };

  };
  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', '$scope', '$log', '$uibModal', '$cookies', '$state', '$element','$timeout', 'User', HomeCtrl]);
})();
