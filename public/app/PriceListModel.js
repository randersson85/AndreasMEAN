"use strict";
angular.module("app")
    .service('PriceListModel',
    function() {
        var service = this;

        service.pricelist = [
            {"type": "Matte paper","size": "34x60", "price": 1100},
            {"type": "Matte paper","size": "45x80","price": 1500},
            {"type": "Matte paper","size": "56x100","price": 1900},
            {"type": "Matte paper","size": "68x120","price": 2300},
            {"type": "Matte paper","size": "40x120","price": 1400},
            {"type": "Matte paper","size": "50x150","price": 2000},
            {"type": "Matte paper","size": "60x180","price": 2700},
            {"type": "Matte paper","size": "70x210","price": 3300},
            {"type": "Glossy paper","size": "34x60", "price": 1100},
            {"type": "Glossy paper","size": "45x80","price": 1500},
            {"type": "Glossy paper","size": "56x100","price": 1900},
            {"type": "Glossy paper","size": "68x120","price": 2300},
            {"type": "Glossy paper","size": "40x120","price": 1400},
            {"type": "Glossy paper","size": "50x150","price": 2000},
            {"type": "Glossy paper","size": "60x180","price": 2700},
            {"type": "Glossy paper","size": "70x210","price": 3300},
            {"type": "Plexi glass","size": "34x60", "price": 2500},
            {"type": "Plexi glass","size": "45x80","price": 2700},
            {"type": "Plexi glass","size": "56x100","price": 3800},
            {"type": "Plexi glass","size": "68x120","price": 6700},
            {"type": "Plexi glass","size": "40x120","price": 6400},
            {"type": "Plexi glass","size": "50x150","price": 10800},
            {"type": "Plexi glass","size": "60x180","price": 11600},
            {"type": "Plexi glass","size": "70x210","price": 14900}
        ];

        service.getPriceFor = function(type, size) {
            var price = -1;
            for (var index in service.pricelist) {
                if (service.pricelist[index].type === type && service.pricelist[index].size === size) {
                    price = service.pricelist[index].price;
                }
            }
            return price;
        };

    });

