angular.module('app').controller('printsController',function($scope, $routeParams, $cookieStore, PrintsModel) {

    $scope.category = $routeParams.category;

    if ($scope.category == 'All') {
        $scope.prints = PrintsModel.getAllPrints();
        $scope.category = 'All Prints'
    } else {
        $scope.prints = PrintsModel.getPrintsByCategory($routeParams.category);
    }
});