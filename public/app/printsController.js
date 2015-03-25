angular.module('app').controller('printsController',function($scope, $routeParams, $cookieStore, PrintsModel) {

    $scope.category = $routeParams.category;

    function getAll() {
        PrintsModel.all().success(function(result) {
            $scope.prints = result;
        });
    }

    function getByCategory() {
        PrintsModel.byCategory($routeParams.category).success(function(result) {
            $scope.prints = result;
        });
    }

    if ($scope.category === 'All' || $scope.category === undefined) {
        getAll();
    } else {
        getByCategory();
    }


});