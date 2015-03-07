angular.module('app').controller('printsController',function($scope, PrintsModel) {
    $scope.prints = PrintsModel.all();
});