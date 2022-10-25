import { defineStore } from "pinia";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { setDoc } from "firebase/firestore";
import { query, where } from "firebase/firestore";
import { db } from "../firebase/config";

///// OPTIONS STORE
export const useDatabaseStore = defineStore("database", {
    state: () => ({
        books: [],
        product: {},
    }),
    getters: {
        getBooks: (state) => [...state.books],
    },

    actions: {
        //----------------------------BOOKS DATABASE--------------------------
        async addData(product) {
            try {
                const docRef = await addDoc(collection(db, "products"), {
                    product
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        },

        updateBookStore() {
            onSnapshot(collection(db, "products"), docSnapshot => {
                this.books = [];

                docSnapshot.forEach((doc) => {

                    this.product = {
                        title: doc.data().product.title,
                        author: doc.data().product.author,
                        about: doc.data().product.about,
                        category: doc.data().product.category,
                        price: doc.data().product.price,
                        year: doc.data().product.year,
                        place: doc.data().product.place,
                        notLike: true,
                        stars: "⭐️",
                        id: doc.id,
                    }

                    this.books.push(this.product);

                    //console.log('holis ', doc.data().product, "id: ", doc.id)
                });

            });
        },

        getBookById(id) {
            const filteredBooks = this.books.filter((book) => id.toLowerCase().replace(/ /g, "") === book.title.toLowerCase().replace(/ /g, ""));
            return filteredBooks ? { ...filteredBooks[0] } : null
        },

       
    },
});

