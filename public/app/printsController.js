angular.module('app').controller('printsController',function($scope, $routeParams, $cookieStore, PrintsModel) {

    $scope.category = $routeParams.category;

    if ($scope.category == 'All') {
        $scope.prints = PrintsModel.all();
        $scope.category = 'All Prints'
    } else {
        $scope.prints = PrintsModel.byCategory($routeParams.category);
    }
});