(function() {
  function User($cookies, $uibModal, $rootScope, $firebaseObject, $firebaseAuth, $timeout) {
    var User = {};

    User.openSetUsernameModal = openSetUsernameModal;
    User.setUsername = setUsername;
    User.data = {};
    User.data.username = $cookies.get('blocChatCurrentUser');

    var ref = firebase.database().ref();
    var auth = $firebaseAuth();

    auth.$onAuthStateChanged(function(authUser) {
        if(authUser) {
            var userRef = ref.child('users').child(authUser.uid);
            var userObj = $firebaseObject(userRef);
            $rootScope.currentUser = userObj;
        } else {
            $rootScope.currentUser = '';
        }
    });

    User.register = function(user) {
      console.log(user);
      auth.$createUserWithEmailAndPassword(user.email, user.password)
        .then(function(regUser) {
          var regRef = ref.child('users')
            .child(regUser.uid).set({ //save all userinfo in firebase
              date: firebase.database.ServerValue.TIMESTAMP,
              regUser: regUser.uid,
              username: user.username,
              email: user.email
            });
          alert("Hi " + user.username + ", Thanks for registering");
        }).catch(function(error) {
          alert(error.message);
        });
    };

    User.login = function(user) {
      auth.$signInWithEmailAndPassword(user.email, user.password)
        .then(function(user) {
          console.log("Logged in user is " + user.uid);
        }).catch(function(error) {
          alert(error.message);
        })
    };

    User.logout = function(user) {
      return auth.$signOut();
    };

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

        modalInstance.result.then(function(name) {
          setUsername(name);
        }, function() {
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
    .factory('User', ['$cookies', '$uibModal', '$rootScope', '$firebaseObject', '$firebaseAuth', '$timeout',User]);
})();
