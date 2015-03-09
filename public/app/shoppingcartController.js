angular.module('app').controller('shoppingcartController',function(
    $scope, $rootScope, ShoppingCartModel)  {

    $scope.cart = ShoppingCartModel.getAllPrints();

    $scope.remove = function(id, type, size) {
        ShoppingCartModel.remove(id, type, size);
        $scope.updateSum();
        $rootScope.$broadcast("updateHeader", ShoppingCartModel.itemsInCart());
        $scope.cart = ShoppingCartModel.getAllPrints();
    };

    $scope.increment = function(id, type, size) {
        ShoppingCartModel.increment(id, type, size);
        $scope.updateSum();
        $rootScope.$broadcast("updateHeader", ShoppingCartModel.itemsInCart());
        $scope.cart = ShoppingCartModel.getAllPrints();
    };

    $scope.decrement = function(id, type, size) {
        ShoppingCartModel.decrement(id, type, size);
        $scope.updateSum();
        $rootScope.$broadcast("updateHeader", ShoppingCartModel.itemsInCart());
        $scope.cart = ShoppingCartModel.getAllPrints();
    };

    $scope.sum = ShoppingCartModel.sum();
    $scope.updateSum = function() {
        $scope.sum = ShoppingCartModel.sum();
    }
    $scope.itemsInCart = ShoppingCartModel.itemsInCart();
});
