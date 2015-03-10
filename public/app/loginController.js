angular.module('app').controller('loginController', function (
    $scope, $http, $location, identity, auth, notifier) {

    $scope.identity = identity;
    $scope.auth = auth;

    $scope.signin = function (username, password) {
        auth.authenticateUser(username, password).then(function (success) {
            if (success) {
                notifier.success('Inloggningen lyckades');
            }
            else {
                notifier.error('Inloggningen misslyckades. Kontrollera dina uppgifter');
            }
        });
    };

    $scope.signout = function() {
        auth.logoutUser().then(function() {
            $scope.username = "";
            $scope.password = "";
            notifier.success('Du är nu utloggad!');
            $location.path('/');
        });
    };
});
