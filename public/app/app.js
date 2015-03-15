angular.module('app', ['ngResource', 'ngRoute', 'flow']);

//Sätter upp routes och vilka filer som ska laddas.
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
        .when('/shoppingcart',{
            templateUrl:'/partials/shoppingcart',
            controller: 'shoppingcartController'
        });
});

angular.module('app').controller('mainController',function() {

});