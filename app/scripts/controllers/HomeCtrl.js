(function() {
  function HomeCtrl(Room, Message, $scope, $log, $uibModal) {

    $scope.rooms = Room.all;
    $scope.currentRoom = null;
    $scope.messages = {};

    $scope.open = function() {
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
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
      // $scope.roomid =
      console.log(room);
      $scope.messages = Message.getByRoomId(room.$id);
      // if ($scope.messages.content == {})
      // {messages.content = "There's nothing in this room"};
      // console.log(Message.getByRoomId(room.roomId));
    }

  };
  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', '$scope', '$log', '$uibModal', HomeCtrl]);
})();
