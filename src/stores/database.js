import { defineStore } from "pinia";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { getDoc, getDocs, doc, setDoc, query, where, orderBy } from "firebase/firestore";
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
                    title: product.title,
                    author: product.author,
                    about: product.about,
                    category: product.category,
                    price: product.price,
                    year: product.year,
                    place: product.place,
                    notLike: product.notLike,
                    stars: product.stars,
                    votes: product.votes,
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        },

        updateBookStore() {
            onSnapshot(collection(db, "products"), docSnapshot => {
                this.books = [];
                
                let votes = [];
                let userVoted = 0;
                let votesSum;
                let ratesMean = 0;

                docSnapshot.forEach((doc) => {

                    votes = doc.data().votes;
                    userVoted = doc.data().votes.length;

                    votesSum = 0;
                    votes.forEach((vote) => {
                        votesSum += parseInt(vote.rate);
                    });

                    ratesMean = (votesSum / userVoted).toFixed(1);

                    this.product = {
                        title: doc.data().title,
                        author: doc.data().author,
                        about: doc.data().about,
                        category: doc.data().category,
                        price: doc.data().price,
                        year: doc.data().year,
                        place: doc.data().place,
                        notLike: doc.data().notLike,
                        stars: ratesMean,
                        votes: doc.data().votes,
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

