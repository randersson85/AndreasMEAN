angular.module('app').controller('loginController',function($scope)
{
    $scope.signin = function(username,password) {
        console.log(username + password);
    }});
