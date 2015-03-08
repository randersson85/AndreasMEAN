angular.module('app').controller('headerController',function($scope, ShoppingCartModel)  {

    $scope.$on("updateHeader", function(e, value){
        $scope.itemsInCart = value;
    });
});
