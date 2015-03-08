angular.module("app")
    .service('PrintsModel',
    function() {
        var service = this;

        service.prints = [
            {"id" : 1,"category" : "Street","title" : "New York","ratio" : "16x9","img" : "newyork.jpg", "dateAdded": "2014-10-1"},
            {"id" : 2,"category" : "Street","title" : "Graffiti","ratio" : "16x9","img" : "graffiti.jpg", "dateAdded": "2014-10-3"},
            {"id" : 3,"category" : "Landscape","title" : "Trees","ratio" : "3x1","img" : "trees.jpg", "dateAdded": "2014-10-2"},
            {"id" : 4,"category" : "Street","title" : "Alone","ratio" : "3x1","img" : "alone.jpg", "dateAdded": "2014-10-5"},
            {"id" : 5,"category" : "Landscape","title" : "Forever","ratio" : "3x1","img" : "forever.jpg", "dateAdded": "2014-10-4"},
            {"id" : 6,"category" : "Landscape","title" : "Ocean","ratio" : "3x1","img" : "ocean.jpg", "dateAdded": "2014-10-10"}
        ];

        //TODO
        // ändra detta till rest-api calls
        service.all = function() {
            return service.prints;
        }

        service.byCategory = function(category) {
            var selectedPrints = [];
            for (var i = 0; i < service.prints.length; ++i) {
                if (service.prints[i].category === category) {
                    selectedPrints.push(service.prints[i]);
                }
            }
            return selectedPrints;
        }

        service.get = function(title) {
            var print = {};
            for (var index in service.prints) {
                if (service.prints[index].title == title) {
                    print = service.prints[index];
                }
            }
            return print;
        }
    });