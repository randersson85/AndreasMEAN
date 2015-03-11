angular.module('app').controller('adminController',function($scope, identity, $routeParams, PrintsModel, notifier) {

    $scope.identity = identity;

    function getAll() {
        PrintsModel.all().success(function(result) {
            $scope.prints = result;
        });
    }
    getAll();

    $scope.add = function(title, category, ratio, img, alt) {
        console.log("add called");
        PrintsModel.add(title, category, ratio, img, alt).then(function (success) {
                if (success) {
                    notifier.success("Produkt tillagd");
                } else {
                    notifier.error("Det gick inte att lägga in produkten");
                }
            });
    };

    $scope.delete = function(title) {
        console.log("delete called with title " + title );
        PrintsModel.delete(title);
        notifier.success("Produkt borttagen");
        getAll();
        };

    $scope.update = function(title) {

    };

});

