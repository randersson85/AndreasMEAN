angular.module('app').factory('Product', ProductModel);
function ProductModel() {
    function Product(id, title, category, ratio, image) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.ratio = ratio;
        this.image = image;
    }
    return Product;
}