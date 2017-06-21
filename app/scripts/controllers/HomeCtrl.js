(function() {
  function HomeCtrl(Room, Message, $scope, $log, $uibModal, $cookies) {

    $scope.rooms = Room.all;
    $scope.currentRoom = null;
    $scope.currentUser = $cookies.get('blocChatCurrentUser');
    $scope.messages = {};

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
    }

  };
  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', '$scope', '$log', '$uibModal', '$cookies', HomeCtrl]);
})();
