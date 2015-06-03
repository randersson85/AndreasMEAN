angular.module('app').controller('printController',function(
    $scope, $rootScope, $routeParams, $location, MATERIALS,
    SIZES, PriceListModel, PrintsModel, ShoppingCartModel) {

    function getOne() {
        PrintsModel.get([$routeParams.printTitle]).success(function(result) {
            $scope.print = result[0];
            $scope.size = $scope.print.ratio === '16x9' ? SIZES[0].size : SIZES[4].size;
            $scope.price = $scope.print.ratio === '16x9' ? 1100 : 1400;
        });
    }
    getOne();


    $scope.materials = MATERIALS;
    $scope.sizes = SIZES;

    $scope.material = MATERIALS[0].name;


    $scope.setPrice = function(type, size) {
        var price = PriceListModel.getPriceFor(type, size);
        $scope.price = price;
    };

    $scope.add = function(title, price, type, size) {
        var print = $scope.print;
        ShoppingCartModel.add(print.id, print.category, print.title, print.ratio, print.img, price, type, size);
        $rootScope.$broadcast("updateHeader", ShoppingCartModel.itemsInCart());
        $location.path("/shoppingcart");
    };


});