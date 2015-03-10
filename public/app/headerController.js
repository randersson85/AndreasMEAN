angular.module('app').controller('headerController',function($scope, identity)  {

    $scope.identity = identity;

    $scope.$on("updateHeader", function(e, value){
        $scope.itemsInCart = value;
    });
});
