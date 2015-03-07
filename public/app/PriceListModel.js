angular.module("app")
    .service('PriceListModel',
    function() {
        var service = this;

        service.pricelist = [
            {"type": "Paper print","size": "90x51", "price": 300},
            {"type": "Paper print","size": "100x56","price": 400},
            {"type": "Paper print","size": "110x62","price": 500},
            {"type": "Paper print","size": "120x68","price": 600},
            {"type": "Paper print","size": "120x40","price": 350},
            {"type": "Paper print","size": "150x50","price": 450},
            {"type": "Paper print","size": "180x60","price": 550},
            {"type": "Paper print","size": "210x70","price": 650},
            {"type": "Plexi glass","size": "90x51", "price": 4620},
            {"type": "Plexi glass","size": "100x56","price": 4970},
            {"type": "Plexi glass","size": "110x62","price": 7139},
            {"type": "Plexi glass","size": "120x68","price": 7345},
            {"type": "Plexi glass","size": "120x40","price": 7883},
            {"type": "Plexi glass","size": "150x50","price": 11743},
            {"type": "Plexi glass","size": "180x60","price": 12899},
            {"type": "Plexi glass","size": "210x70","price": 14740}
        ];

        service.getPriceFor = function(type, size) {
            var price = -1;
            for (var index in service.pricelist) {
                if (service.pricelist[index].type === type && service.pricelist[index].size === size) {
                    price = service.pricelist[index].price;
                }
            }
            return price;
        }


    });

