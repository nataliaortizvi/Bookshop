import { defineStore } from "pinia";
///// OPTIONS STORE
export const useProductsStore = defineStore("products", {
    state: () => ({
        products: [
            {
                title: 'uno',
                author: 'arturo',
                notLike: false,
                about: 'mucha info info info mucha',
                price: 200,
                category: 'miedo',
                year: '2019',
                place: 'colombia',
            },
            {
                title: 'dos',
                author: 'mateus',
                notLike: true,
                about: 'mucha info info info mucha',
                price: 65,
                category: 'miedo',
                year: 2019,
                place: 'colombia',
            },
            {
                title: 'tres',
                author: 'nico',
                notLike: true,
                about: 'mucha info info info mucha',
                price: 120,
                category: 'miedo',
                year: '2019',
                place: 'colombia',
            },
            {
                title: 'cuatro',
                author: 'nico',
                notLike: true,
                about: 'mucha info info info mucha',
                price: 120,
                category: 'miedo',
                year: '2019',
                place: 'colombia',
            },
            {
                title: 'cinco',
                author: 'nico',
                notLike: true,
                about: 'mucha info info info mucha',
                price: 120,
                category: 'miedo',
                year: '2019',
                place: 'colombia',
            },
        ],
        localStorageProducts: []
    }),
    getters: {
        getProducts: (state) => [...state.products],
    },
    actions: {
        newProduct(product) {
            this.localStorageProducts.push(product)
            this.products.push(product);
            localStorage.setItem('products', JSON.stringify(this.localStorageProducts))
        },
        loadProducts() {
            this.localStorageProducts = JSON.parse(localStorage.getItem('products'))
            this.products = this.products.concat([...this.localStorageProducts])
        },
        getProductById(id) {
            const filteredProducts = this.products.filter((product) => id.toLowerCase() === product.title.toLowerCase());
            return filteredProducts ? {...filteredProducts[0] } : null
        },
    },
});