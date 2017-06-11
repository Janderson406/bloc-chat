(function() {
  function HomeCtrl(Room, $scope, $log, $uibModal) {

    $scope.rooms = Room.all;

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
  };
  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$scope', '$log', '$uibModal', HomeCtrl]);
})();
