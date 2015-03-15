//Anger vilken namnrymd som controllern ska vara aktiv i, vad den lyssnar på för anrop, skickar sedan in beroenden
angular.module('app').controller('adminController',function($scope, identity, $routeParams, PrintsModel, notifier) {

    //Hämtar variabler från scope och sätter detta till controllerns variabler
    $scope.identity = identity;
    $scope.currentTitle = $routeParams.title;
    $scope.currentPrint = PrintsModel.get($scope.currentTitle).success(function(result) {
        $scope.currentPrint = result[0];
    });


    function getAll() {
        PrintsModel.all().success(function(result) {
            $scope.prints = result;
        });
    }
    getAll();

    $scope.add = function(title, category, ratio, img, alt) {
        PrintsModel.add(title, category, ratio, img, alt).then(function (success) {
                if (success) {
                    notifier.success("Produkt tillagd");
                } else {
                    notifier.error("Det gick inte att lägga in produkten");
                }
            });
    };

    $scope.delete = function(title) {
        PrintsModel.delete(title);
        notifier.success("Produkt borttagen");
        getAll();
        };

    $scope.update = function(title, category, ratio, img, alt) {
        PrintsModel.update(title, category, ratio, img, alt);
        notifier.success("Produkt uppdaterad");
        getAll();
    };
});
