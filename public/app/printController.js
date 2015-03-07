angular.module('app').controller('printController',function(
    $scope, $routeParams, MATERIALS, SIZES, PriceListModel, PrintsModel) {
    $scope.prints = PrintsModel.all();
    $scope.print = $scope.prints[$routeParams.printID-1];

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

    //Används för att kunan filtrera produtlistningen
    $scope.filters = { };


});