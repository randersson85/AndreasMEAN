angular.module("app")
    .service('PriceListModel',
    function() {
        var service = this;

        service.pricelist = [
            {"type": "Matte paper","size": "90x51", "price": 300},
            {"type": "Matte paper","size": "100x56","price": 400},
            {"type": "Matte paper","size": "110x62","price": 500},
            {"type": "Matte paper","size": "120x68","price": 600},
            {"type": "Matte paper","size": "120x40","price": 350},
            {"type": "Matte paper","size": "150x50","price": 450},
            {"type": "Matte paper","size": "180x60","price": 550},
            {"type": "Matte paper","size": "210x70","price": 650},
            {"type": "Glossy paper","size": "90x51", "price": 300},
            {"type": "Glossy paper","size": "100x56","price": 400},
            {"type": "Glossy paper","size": "110x62","price": 500},
            {"type": "Glossy paper","size": "120x68","price": 600},
            {"type": "Glossy paper","size": "120x40","price": 350},
            {"type": "Glossy paper","size": "150x50","price": 450},
            {"type": "Glossy paper","size": "180x60","price": 550},
            {"type": "Glossy paper","size": "210x70","price": 650},
            {"type": "Plexi glass","size": "90x51", "price": 4620},
            {"type": "Plexi glass","size": "100x56","price": 4970},
            {"type": "Plexi glass","size": "110x62","price": 7139},
            {"type": "Plexi glass","size": "120x68","price": 7345},
            {"type": "Plexi glass","size": "120x40","price": 6500},
            {"type": "Plexi glass","size": "150x50","price": 10800},
            {"type": "Plexi glass","size": "180x60","price": 11600},
            {"type": "Plexi glass","size": "210x70","price": 14900}
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

