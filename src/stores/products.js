import { defineStore } from "pinia";
///// OPTIONS STORE
export const useProductsStore = defineStore("products", {
    state: () => ({
        products: [
            {
                title: 'Fairy Tale',
                author: 'Stephen King',
                notLike: true,
                about: 'Legendary storyteller Stephen King goes into the deepest well of his imagination in this spellbinding novel about a seventeen-year-old boy who inherits the keys to a parallel world where good and evil are at war, and the stakes could not be higher—for that world or ours.',
                price: 22.75,
                category: ['fiction', 'horror', 'mystery'],
                year: 2020,
                place: 'North america',
                image: '/images/books/stephenBook.png',
                stars: '⭐️⭐️⭐️⭐️⭐️',
            },
            {
                title: 'The Ballad of Never After',
                author: 'Stephanie Garber',
                notLike: true,
                about: 'Stephanie Garber´s The Ballad of Never After is the fiercely-anticipated sequel to the #1 New York Times bestseller Once Upon a Broken Heart, starring Evangeline Fox and the Prince of Hearts on a new journey of magic, mystery, and heartbreak',
                price: 18.55,
                category: ['fiction', 'romance'],
                year: 2019,
                place: 'South america',
                image: '/images/books/garberBook.png',
                stars: '⭐️⭐️⭐️⭐️',
            },
            {
                title: 'Kingdom of the Feared',
                author: 'Kerri Maniscalco',
                notLike: true,
                about: 'This unmissable conclusion to Kerri Maniscalco’s stunning Kingdom of the Wicked series follows Emilia and the Prince of Wrath on one final journey that reveals shocking truths readers will never see coming.',
                price: 12.45,
                category: ['history', 'horror'],
                year: 2021,
                place: 'north america',
                image: '/images/books/kerriBook.png',
                stars: '⭐️⭐️⭐️',
            },
            {
                title: 'Belladonna',
                author: 'Adalyn Grace',
                notLike: true,
                about: '11A gothic romance following a girl with Death constantly hovering nearby, Belladonna is the gripping story full of wealth, desire, and betrayal that will sweep readers up in its haunting tale from the very beginning!',
                price: 14.24,
                category: ['fiction', 'romance', 'mystery'],
                year: 2022,
                place: 'Africa',
                image: '/images/books/adalynBook.png',
                stars: '⭐️⭐️⭐️⭐️⭐️',
            },
            {
                title: 'The First to Die at the End',
                author: 'Adam Silvera',
                notLike: true,
                about: 'In this prequel to #1 New York Times bestselling phenomenon They Both Die at the End, two new strangers spend a life-changing day together after Death-Cast first makes their fateful calls.',
                price: 15.99,
                category: ['fiction', 'kids'],
                year: 2020,
                place: 'Asia',
                image: '/images/books/silveraBook.jpg',
                stars: '⭐️⭐️⭐️⭐️',
            },
            {
                title: 'The Marriage Portrait',
                author: 'Maggie O´Farrell',
                notLike: true,
                about: 'The author of Hamnet—New York Times best seller and National Book Critics Circle Award winner—brings the world of Renaissance Italy to jewel-bright life in this unforgettable fictional portrait of the captivating young duchess Lucrezia de´ Medici as she makes her way in a troubled court.',
                price: 28.00,
                category: ['educational', 'history'],
                year: 2018,
                place: 'Europe',
                image: '/images/books/hamnetBook.png',
                stars: '⭐️⭐️⭐️⭐️⭐️',
            },
            {
                title: 'The Choice',
                author: 'Dr. Edith Eva Eger',
                notLike: true,
                about: 'The Choice is a reminder of what courage looks like in the worst of times and that we all have the ability to pay attention to what we’ve lost, or to pay attention to what we still have.',
                price: 13.59,
                category: ['Biographies', 'romance'],
                year: 2015,
                place: 'north america',
                image: '/images/books/choiceBook.png',
                stars: '⭐️⭐️⭐️⭐️',
            },
            {
                title: 'The Diary of a Young Girl',
                author: 'Anne Frank',
                notLike: true,
                about: 'The Diary of a Young Girl, also known as The Diary of Anne Frank, is a book of the writings from the Dutch-language diary kept by Anne Frank while she was in hiding for two years with her family during the Nazi occupation of the Netherlands',
                price: 8.15,
                category: ['Biographies', 'history'],
                year: 1943,
                place: 'europe',
                image: '/images/books/anneBook.jpg',
                stars: '⭐️⭐️⭐️⭐️⭐️',
            },
        ],
        localStorageProducts: [],
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
            const filteredProducts = this.products.filter((product) => id.toLowerCase().replace(/ /g, "")  === product.title.toLowerCase().toLowerCase().replace(/ /g, "") );
            return filteredProducts ? {...filteredProducts[0] } : null
        },



        getProductsByPlace(p) {
            const filteredProducts = this.products.filter((product) => p.toLowerCase().replace(/ /g, "")  === product.place.toLowerCase().toLowerCase().replace(/ /g, "") );
            return filteredProducts ? {...filteredProducts } : null
        },
        getProductsByYear(y) {
            const filteredProducts = this.products.filter((product) => p.toLowerCase().replace(/ /g, "")  === product.place.toLowerCase().toLowerCase().replace(/ /g, "") );
            return filteredProducts ? {...filteredProducts } : null
        },
    },
});