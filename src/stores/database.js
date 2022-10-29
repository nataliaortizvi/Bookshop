import { defineStore } from "pinia";
import { collection, addDoc, onSnapshot, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

import { ref as storeRef, getDownloadURL, uploadBytes, } from "firebase/storage";
import { storage } from '../firebase/config';

///// OPTIONS STORE
export const useDatabaseStore = defineStore("database", {
    state: () => ({
        books: [],
        product: {},
        imageInfo: {},
    }),
    getters: {
        getBooks: (state) => [...state.books],
    },

    actions: {
        //----------------------------BOOKS DATABASE--------------------------
        async addData(product) {
            this.imageInfo = product.image
            try {
                const refBook = await addDoc(collection(db, "products"), {
                    title: product.title,
                    author: product.author,
                    about: product.about,
                    category: product.category,
                    price: product.price,
                    year: product.year,
                    place: product.place,
                    stars: product.stars,
                    votes: product.votes,
                    image: product.image,
                });

                const storageReference = storeRef(storage, "files/" + product.image);

                getDownloadURL(storageReference).then(async (url) => {
                    try {
                        let nameimage = product.image;

                        this.imageInfo = {
                            url,
                            nameimage,
                        };

                        updateDoc(doc(db, "products", refBook.id), {
                            "image": this.imageInfo,
                        });

                        console.log("WHOOO: ", refBook.id, this.imageInfo);

                    } catch (e) {
                        console.error("Error adding document: ", e);
                    }
                });
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

                docSnapshot.forEach((docu) => {

                    votes = docu.data().votes;
                    userVoted = docu.data().votes.length;

                    votesSum = 0;
                    votes.forEach((vote) => {
                        votesSum += parseInt(vote.rate);
                    });

                    if (userVoted == 0) {
                        ratesMean = 0;
                    } else {
                        ratesMean = (votesSum / userVoted).toFixed(1);
                    }

                    this.product = {
                        image: docu.data().image,
                        title: docu.data().title,
                        author: docu.data().author,
                        about: docu.data().about,
                        category: docu.data().category,
                        price: docu.data().price,
                        year: docu.data().year,
                        place: docu.data().place,
                        stars: ratesMean,
                        votes: docu.data().votes,
                        id: docu.id,
                    }
                    console.log('RECIBEEE', this.product.id, docu.data().image)
                    this.books.push(this.product);

                    updateDoc(doc(db, "products", docu.id), this.product);
                    //console.log('holis ', this.books)
                });
            });
        },

        getBookById(id) {
            const filteredBooks = this.books.filter((book) => id.toLowerCase().replace(/ /g, "") === book.title.toLowerCase().replace(/ /g, ""));
            return filteredBooks ? { ...filteredBooks[0] } : null
        },

        async uploadImage(image) {
            //console.log("WHAT IMAGE: ", image);
            const storageReference = storeRef(storage, "files/" + image.name);


            try {
                const storageReference = storeRef(storage, "files/" + image.name);

                await uploadBytes(storageReference, image);
            } catch (e) {
                console.error("Error uploading document: ", e);
            }
        },
    },
});

