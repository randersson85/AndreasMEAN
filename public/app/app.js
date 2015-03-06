angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:'/partials/main',
            controller: 'mainController'
        })
        .when('/prints',{
            templateUrl:'/partials/prints',
            controller: 'mainController'
        })
        .when('/print/:printID/:printTitle', {
            templateUrl:'/partials/print',
            controller: 'mainController'
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

angular.module('app').controller('mainController',function($scope, $routeParams, $location){

    $scope.prints = [
        {"id" : 1,"category" : "Street","title" : "New York","ratio" : "16x9","img" : "newyork.jpg"},
        {"id" : 2,"category" : "Street","title" : "Graffiti","ratio" : "16x9","img" : "graffiti.jpg"},
        {"id" : 3,"category" : "Landscape","title" : "Trees","ratio" : "3x1","img" : "trees.jpg"},
        {"id" : 4,"category" : "Street","title" : "Alone","ratio" : "3x1","img" : "alone.jpg"},
        {"id" : 5,"category" : "Landscape","title" : "Forever","ratio" : "3x1","img" : "forever.jpg"},
        {"id" : 6,"category" : "Landscape","title" : "Ocean","ratio" : "3x1","img" : "ocean.jpg"}
    ];

    $scope.pricelist = [
        {"type": "Paper print","size": "90x51", "price": 300},
        {"type": "Paper print","size": "100x56","price": 400},
        {"type": "Paper print","size": "110x62","price": 500},
        {"type": "Paper print","size": "120x68","price": 600},
        {"type": "Paper print","size": "120x40","price": 350},
        {"type": "Paper print","size": "150x50","price": 450},
        {"type": "Paper print","size": "180x60","price": 550},
        {"type": "Paper print","size": "210x70","price": 650},
        {"type": "Plexi glass","size": "90x51", "price": 4620},
        {"type": "Plexi glass","size": "100x56","price": 4970},
        {"type": "Plexi glass","size": "110x62","price": 7139},
        {"type": "Plexi glass","size": "120x68","price": 7345},
        {"type": "Plexi glass","size": "120x40","price": 7883},
        {"type": "Plexi glass","size": "150x50","price": 11743},
        {"type": "Plexi glass","size": "180x60","price": 12899},
        {"type": "Plexi glass","size": "210x70","price": 14740}
    ];

    $scope.materials = ["Paper print", "Plexi glass"];
    $scope.standardSizes = ["90x51", "100x56", "110x62", "120x68"];
    $scope.wideSizes = ["120x40", "150x50", "180x60", "210x70"];

    //Default values
    $scope.material = "Paper print";
    $scope.size = "120x40";

    $scope.setPrice = function(type, size) {
        var price = $scope.price;
        for (var index in $scope.pricelist) {
            if ($scope.pricelist[index].type === type && $scope.pricelist[index].size === size) {
                price = $scope.pricelist[index].price;
            }
        }
        $scope.price = price;
    };

    $scope.price = $scope.pricelist[0].price;
    $scope.filters = { };
    $scope.print = $scope.prints[$routeParams.printID-1];

    $scope.cart = [];

    $scope.addToCart = function(type, size, price) {
        $scope.cart.push({"type": type, "size" : size, "price" : price, "quantity" : 1});
        console.log($scope.cart);
        $location.path("/shoppingcart");
    };
});

//bildspel