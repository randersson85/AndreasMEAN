angular.module("app")
    .service('PrintsModel',
    function($http) {
        var service = this;

        service.prints = [];
//            {"id" : 1,"category" : "Street","title" : "New York","ratio" : "16x9","img" : "newyork.jpg", "dateAdded": "2014-10-1"},
  //          {"id" : 2,"category" : "Street","title" : "Graffiti","ratio" : "16x9","img" : "grafitti.jpg", "dateAdded": "2014-10-3"},
    //        {"id" : 3,"category" : "Landscape","title" : "Trees","ratio" : "3x1","img" : "trees.jpg", "dateAdded": "2014-10-2"},
      //      {"id" : 4,"category" : "Street","title" : "Alone","ratio" : "3x1","img" : "alone.jpg", "dateAdded": "2014-10-5"},
        //    {"id" : 5,"category" : "Landscape","title" : "Forever","ratio" : "3x1","img" : "forever.jpg", "dateAdded": "2014-10-4"},
          //  {"id" : 6,"category" : "Landscape","title" : "Ocean","ratio" : "3x1","img" : "ocean.jpg", "dateAdded": "2014-10-10"}


        service.all = function() {
            return $http.get('/api/prints');
        };

        service.byCategory = function(category) {
            return $http.get('/api/prints/' + category);
        };

        service.get = function(title) {
            return $http.get('/api/print/' + title);
        };

        service.add = function(title, category, ratio, img, alt) {
            return $http.post('/api/print/add/', {title: title, category: category, ratio: ratio, img: img, alt: alt});
        };

        service.delete = function(title) {
            console.log("delete called in model with title " + title );
            return $http.post('/api/print/' + title);
        };

        service.update = function(title, category, ratio, img, alt) {
            return $http.put('/api/print/', {title: title, category: category, ratio: ratio, img: img, alt: alt});
        };
    });