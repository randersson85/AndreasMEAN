angular.module('app', ['ngResource', 'ngRoute', 'ngCookies']);

angular.module('app').config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:'/partials/main',
        })
        .when('/prints',{
            templateUrl:'/partials/prints',
            controller: 'printsController'
        })
        .when('/print/:printID/:printTitle', {
            templateUrl:'/partials/print',
            controller: 'printController'
        })
        .when('/admin',{
            templateUrl:'/partials/admin',
            controller: 'loginController'
        })
        .when('/shoppingcart',{
            templateUrl:'/partials/shoppingcart',
            controller: 'mainController'
        })
});

angular.module('app').controller('mainController',function(
    $scope, $location, $cookieStore, $routeParams, MATERIALS, SIZES, PriceListModel, ShoppingCartModel)  {

    $scope.cart = ShoppingCartModel.all();

    $scope.remove = function(id) {
        ShoppingCartModel.remove(id);
        $scope.updateSum();
        $scope.cart = ShoppingCartModel.all();
    };

    $scope.increment = function(id, type, size) {
        ShoppingCartModel.increment(id, type, size);
        $scope.updateSum();
        $scope.cart = ShoppingCartModel.all();
    };

    $scope.decrement = function(id, type, size) {
        ShoppingCartModel.decrement(id, type, size);
        $scope.updateSum();
        $scope.cart = ShoppingCartModel.all();
    };

    $scope.sum = ShoppingCartModel.sum();
    $scope.updateSum = function() {
        $scope.sum = ShoppingCartModel.sum();
    }
});
