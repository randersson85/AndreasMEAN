angular.module('app').controller('shoppingcartController',function(
    $scope, $rootScope, ShoppingCartModel)  {

    $scope.cart = ShoppingCartModel.all();

    $scope.remove = function(id, type, size) {
        ShoppingCartModel.remove(id, type, size);
        $scope.updateSum();
        $rootScope.$broadcast("updateHeader", ShoppingCartModel.itemsInCart());
        $scope.cart = ShoppingCartModel.all();
    };

    $scope.increment = function(id, type, size) {
        ShoppingCartModel.increment(id, type, size);
        $scope.updateSum();
        $rootScope.$broadcast("updateHeader", ShoppingCartModel.itemsInCart());
        $scope.cart = ShoppingCartModel.all();
    };

    $scope.decrement = function(id, type, size) {
        ShoppingCartModel.decrement(id, type, size);
        $scope.updateSum();
        $rootScope.$broadcast("updateHeader", ShoppingCartModel.itemsInCart());
        $scope.cart = ShoppingCartModel.all();
    };

    $scope.sum = ShoppingCartModel.sum();
    $scope.updateSum = function() {
        $scope.sum = ShoppingCartModel.sum();
    }
    $scope.itemsInCart = ShoppingCartModel.itemsInCart();
});
