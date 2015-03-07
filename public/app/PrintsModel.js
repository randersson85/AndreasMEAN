angular.module("app")
    .service('PrintsModel',
    function() {
        var service = this;

        service.prints = [
            {"id" : 1,"category" : "Street","title" : "New York","ratio" : "16x9","img" : "newyork.jpg"},
            {"id" : 2,"category" : "Street","title" : "Graffiti","ratio" : "16x9","img" : "graffiti.jpg"},
            {"id" : 3,"category" : "Landscape","title" : "Trees","ratio" : "3x1","img" : "trees.jpg"},
            {"id" : 4,"category" : "Street","title" : "Alone","ratio" : "3x1","img" : "alone.jpg"},
            {"id" : 5,"category" : "Landscape","title" : "Forever","ratio" : "3x1","img" : "forever.jpg"},
            {"id" : 6,"category" : "Landscape","title" : "Ocean","ratio" : "3x1","img" : "ocean.jpg"}
        ];

        //TODO
        // ändra detta till rest-api calls
        service.all = function() {
            return service.prints;
        }
    });