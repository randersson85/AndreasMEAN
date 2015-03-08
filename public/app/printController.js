angular.module('app').controller('printController',function(
    $scope, $rootScope, $routeParams, $location, MATERIALS, SIZES, PriceListModel, PrintsModel, ShoppingCartModel) {
    $scope.prints = PrintsModel.all();
    $scope.print = PrintsModel.get([$routeParams.printTitle]);

    $scope.materials = MATERIALS;
    $scope.sizes = SIZES;

    $scope.material = MATERIALS[0].name;

    //Hack för att sätta defaultvärden i dropdowns
    $scope.size = $scope.print.ratio === '16x9' ? SIZES[0].size : SIZES[4].size;
    $scope.price = $scope.print.ratio === '16x9' ? 300 : 350;

    $scope.setPrice = function(type, size) {
        var price = PriceListModel.getPriceFor(type, size);
        $scope.price = price;
    };

    $scope.add = function(id, price, type, size) {
        var print = PrintsModel.get(id);
        ShoppingCartModel.add(print.id, print.category, print.title, print.ratio, print.img, price, type, size);
        $rootScope.$broadcast("updateHeader", ShoppingCartModel.itemsInCart());
        $location.path("/shoppingcart");
    }


});