angular.module('app').controller('printsController',function($scope, $cookieStore, PrintsModel) {
    $scope.prints = PrintsModel.all();
});