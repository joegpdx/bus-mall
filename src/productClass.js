export class ProductClass {
    constructor(products) {
        this.products = products.slice();
    }

    getproducts() {
        return this.products;
    }

    // remove a product from the array
    removeTreeById(someId) {
        this.products.forEach((product, i) => {
            if (someId === product.id) {
                this.products.splice(i, 1);
            }
        });
    }

    // we need to get certain product images
    getTreeById(someId) {
        let productMatch;

        this.products.forEach(product => {
            // compare the id provided with every product id
            if (someId === product.id) {
                productMatch = product;
            }
        });

        return productMatch;
    }

    // show if any products exist
    hasAnyproducts() {
        return this.products.length;
    }

    // get a product at random
    getRandomProduct() {
        const randomProductIndex = Math.floor(Math.random() * this.products.length);

        return this.products[randomProductIndex];
    }
}