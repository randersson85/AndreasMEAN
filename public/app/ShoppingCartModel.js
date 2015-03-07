angular.module("app")
    .service('ShoppingCartModel',
    function($cookieStore) {
        var service = this;

        service.cart = $cookieStore.get('cart');

        service.add = function(id, category, title, ratio, img) {
            if (service.cart === []) {
                service.cart = $cookieStore.get('cart');
            }
            service.cart.push({
                id: id,
                category: category,
                title: title,
                ratio: ratio,
                img: img
            });
            $cookieStore.put('cart', service.cart);
            console.log(service.cart);
        };

        service.all = function() {
            return $cookieStore.get('cart');
        }
    });