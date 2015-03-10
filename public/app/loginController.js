angular.module('app').controller('loginController', function ($scope, $http, identity, auth) {
    $scope.identity = identity;
    $scope.auth = auth;

    $scope.signin = function (username, password) {
        auth.authenticateUser(username, password).then(function (success) {
            if (success) {
                console.log('Inloggningen är klar');
            }
            else {
                console.log('Något gick fel vid inloggning, kontrollera dina uppgifter');
            }
        });
    };
});
