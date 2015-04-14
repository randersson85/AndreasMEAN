angular.module("app")
    .service('ShoppingCartModel',
    function ($cookieStore) {
        "use strict";
        var service = this;

        service.cart = !$cookieStore.get('cart') ? [] : $cookieStore.get('cart');

        service.add = function (id, category, title, ratio, img, price, type, size) {
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
        };

        service.remove = function (id, type, size) {
            for (var i = service.cart.length - 1; i >= 0; i--) {
                if (service.cart[i].id === id &&
                    service.cart[i].type === type &&
                    service.cart[i].size === size) {
                    service.cart.splice(i, 1);
                }
            }
            $cookieStore.put('cart', service.cart);
        };

        service.increment = function (id, type, size) {
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

        service.decrement = function (id, type, size) {
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

        service.sum = function () {
            if (service.cart === []) {
                service.cart = $cookieStore.get('cart');
            }
            var sum = 0;
            for (var j = 0; j < service.cart.length; j++) {
                sum += service.cart[j].price * service.cart[j].quantity;
            }
            $cookieStore.put('cart', service.cart);
            return sum;

        };

        service.itemsInCart = function () {
            service.cart = !$cookieStore.get('cart') ? [] : $cookieStore.get('cart');
            var qty = 0;
            for (var j = 0; j < service.cart.length; j++) {
                qty += service.cart[j].quantity;
            }
            $cookieStore.put('cart', service.cart);
            return qty;
        };

        service.all = function () {
            return $cookieStore.get('cart');
        };

        service.checkoutPayPal = function () {

            // global data
            var data = {
                cmd: "_cart",
                business: "PKXPH483H6AYA",
                upload: "1",
                rm: "2",
                charset: "utf-8"
            };

            // item data
            for (var i = 0; i < this.cart.length; i++) {
                var item = this.cart[i];
                var ctr = i + 1;
                data["item_number_" + ctr] = item.id;
                data["item_name_" + ctr] = item.title;
                data["quantity_" + ctr] = item.quantity;
                data["on0_" + ctr] = "Print type";
                data["os0_" + ctr] = item.type;
                data["on1_" + ctr] = "Size";
                data["os1_" + ctr] = item.size;
                data["amount_" + ctr] = item.price.toFixed(2);
                data["currency_code"] = "SEK";
                /*
                id: id,
                category: category,
                title: title,
                ratio: ratio,
                img: img,
                price: price,
                type: type,
                size: size,
                quantity: 1
                */
            }

            // build form
            var form = $('<form></form>');
            form.attr("action", "https://www.paypal.com/cgi-bin/webscr");
            form.attr("method", "POST");
            form.attr("style", "display:none;");
            this.addFormFields(form, data);
            //this.addFormFields(form, parms.options);
            $("body").append(form);

            // submit form
            form.submit();
            form.remove();
        }

       service.addFormFields = function (form, data) {
            if (data != null) {
                $.each(data, function (name, value) {
                    if (value != null) {
                        var input = $("<input></input>").attr("type", "hidden").attr("name", name).val(value);
                        form.append(input);
                    }
                });
            }
        }
    });