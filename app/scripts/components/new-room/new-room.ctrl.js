angular.module('blocChat').component('newRoom', {
  templateUrl: '/scripts/components/new-room/new-room.html',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controllerAs: 'modal',
  controller: function () {
    var modal = this;

    modal.$onInit = function () {
      modal.rooms = modal.resolve.rooms;
    };

    modal.createRoom = function(room){
      modal.close(modal.rooms.$add(room));
      alert(room + " room added!");
    }

    modal.cancel = function () {
      modal.dismiss({$value: 'cancel'});
    };
  }
});
