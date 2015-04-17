angular.module('app', ['ngResource', 'ngRoute', 'ngCookies', 'flow']);

angular.module('app').config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:'/partials/main'
        })
        .when('/prints',{
            templateUrl:'/partials/prints',
            controller: 'printsController'
        })
        .when('/prints/:category',{
            templateUrl:'/partials/prints',
            controller: 'printsController'
        })
        .when('/print/:printTitle', {
            templateUrl:'/partials/print',
            controller: 'printController'
        })
        .when('/admin',{
            templateUrl:'/partials/admin',
            controller: 'loginController'
        })
        .when('/admin/add',{
            templateUrl:'/partials/adminAdd',
            controller: 'adminController'
        })
        .when('/admin/update/:title',{
            templateUrl:'/partials/adminUpdate',
            controller: 'adminController'
        })
        .when('/about',{
            templateUrl:'/partials/about',
        })
        .when('/terms',{
            templateUrl:'/partials/terms',
        })
        .when('/shoppingcart',{
            templateUrl:'/partials/shoppingcart',
            controller: 'shoppingcartController'
        });

});

angular.module('app').controller('mainController',function() {

});

angular.module('app').config(['flowFactoryProvider', function (flowFactoryProvider) {
    flowFactoryProvider.defaults = {
        target: '/upload',
        permanentErrors:[404, 500, 501]
    };
    // You can also set default events:
    flowFactoryProvider.on('catchAll', function (event) {
        console.log("ng-flow arbetar, stör ej " + event )
        console.log(arguments);
    });
    // Can be used with different implementations of Flow.js
    // flowFactoryProvider.factory = fustyFlowFactory;
}]);
