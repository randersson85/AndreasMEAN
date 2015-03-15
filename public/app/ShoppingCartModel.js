angular.module("app")
    .service('ShoppingCartModel',
    function($cookieStore) {
        var service = this;



        service.cart = !$cookieStore.get('cart') ? [] : $cookieStore.get('cart');

        service.add = function(id, category, title, ratio, img, price, type, size) {
            if (service.cart === []) {
                service.cart = $cookieStore.get('cart');
            }

            var unique = true;
            for (var j = 0; j < service.cart.length; j++) {
                if (service.cart[j].id === id &&
                    service.cart[j].type === type &&
                    service.cart[j].size === size
                ) {
                    unique = false;
                    service.cart[j].quantity++;
                }
            }

            if (unique) {
                service.cart.push({
                    id: id,
                    category: category,
                    title: title,
                    ratio: ratio,
                    img: img,
                    price: price,
                    type: type,
                    size: size,
                    quantity: 1
                });
            }
            $cookieStore.put('cart', service.cart);
            console.log(service.cart);
        };

        service.remove = function(id, type, size) {
            for(var i = service.cart.length - 1; i >= 0; i--){
                if(service.cart[i].id === id &&
                    service.cart[i].type === type &&
                    service.cart[i].size === size)
                {
                    service.cart.splice(i,1);
                }
            }
            $cookieStore.put('cart', service.cart);
        };

        service.increment = function(id, type, size) {
            if (service.cart === []) {
                service.cart = $cookieStore.get('cart');
            }
            for (var j = 0; j < service.cart.length; j++) {
                if (service.cart[j].id === id &&
                    service.cart[j].type === type &&
                    service.cart[j].size === size
                ) {
                    service.cart[j].quantity++;
                }
            }
            $cookieStore.put('cart', service.cart);
        };

        service.decrement = function(id, type, size) {
            if (service.cart === []) {
                service.cart = $cookieStore.get('cart');
            }
            for (var j = 0; j < service.cart.length; j++) {
                if (service.cart[j].id === id &&
                    service.cart[j].type === type &&
                    service.cart[j].size === size
                ) {
                    if (service.cart[j].quantity <= 1) {
                        service.remove(id, type, size);
                    } else {
                        service.cart[j].quantity--;
                    }
                }
            }
            $cookieStore.put('cart', service.cart);
        };

        service.sum = function() {
            if (service.cart === []) {
                service.cart = $cookieStore.get('cart');
            }
            var sum = 0;
            for (var j = 0; j < service.cart.length; j++) {
                  sum += service.cart[j].price * service.cart[j].quantity;
                };
            $cookieStore.put('cart', service.cart);
            return sum;

        };

        service.itemsInCart = function() {
            service.cart = !$cookieStore.get('cart') ? [] : $cookieStore.get('cart');
            var qty = 0;
            for (var j = 0; j < service.cart.length; j++) {
                qty += service.cart[j].quantity;
            };
            $cookieStore.put('cart', service.cart);
            return qty;
        };

        service.all = function() {
            return $cookieStore.get('cart');
        }
    });