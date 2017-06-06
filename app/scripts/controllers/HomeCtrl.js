(function() {
  function HomeCtrl(Room, $scope) {

    $scope.rooms = Room.all;
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$scope', HomeCtrl]);
})();
