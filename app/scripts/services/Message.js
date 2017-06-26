(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    // Message.all = messages;

    Message.getByRoomId = function(roomId) {
        // Filter the messages by their room ID.
        // if (roomId) {
          return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        // } else {
        //   return
        // };
    };


    Message.send = function(newMessage) {
        // Send method logic
        messages.$add(newMessage);
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
