angular.module('app', ['ngResource', 'ngRoute']);

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
    $scope, $routeParams, MATERIALS, SIZES, PriceListModel){


});
