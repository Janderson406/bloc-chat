(function() {
    function UserCtrl($uibModalInstance, $cookies, $state) {
        var user = this;

        user.addUsername = function () {
            $cookies.put('blocChatCurrentUser', user.username);
            $uibModalInstance.close();
            $state.reload();
        };
    }

    angular
        .module('blocChat')
        .controller('UserCtrl', ['$uibModalInstance', '$cookies', '$state', UserCtrl]);
})();
