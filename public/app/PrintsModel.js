angular.module("app")
    .service('PrintsModel',
    function($http) {
        var service = this;

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
            return $http.post('/api/print/' + title);
        };

        service.update = function(title, category, ratio, img, alt) {
            return $http.put('/api/print/', {title: title, category: category, ratio: ratio, img: img, alt: alt});
        };
    });