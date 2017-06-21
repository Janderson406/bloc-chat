(function() {
    function UserCtrl($uibModalInstance, $cookies) {
        var user = this;

        user.addUsername = function () {
            $cookies.put('blocChatCurrentUser', user.username);
            $uibModalInstance.close();
        }
    }

    angular
        .module('blocChat')
        .controller('UserCtrl', ['$uibModalInstance', '$cookies', UserCtrl]);
})();
