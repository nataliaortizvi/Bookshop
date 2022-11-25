import { defineStore } from "pinia";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import { db, auth } from "../../firebase/config";
import { doc, setDoc, updateDoc, onSnapshot, deleteDoc, deleteField } from "firebase/firestore";

///// OPTIONS STORE
export const useAuthenticationStore = defineStore("authentication", {
    state: () => ({
        user: null,
        currentUser: null,
    }),
    actions: {
        //old user
        async signIn(email, password) {
            await signInWithEmailAndPassword(auth, email, password);
        },

        //new user
        async signUp(email, password, name) {

            var ref;
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);

                ref = userCredential.user;

                this.user = {
                    name: name,
                    email: email,
                    favorites: [],
                    id: ref.uid,
                }
                setDoc(doc(db, "users", ref.uid), this.user);

            } catch (error) {
                //alert(error.message);  
            }
        },

        //log out 
        logOut() {
            signOut(auth);
        },

        //----------------------------USERS DATABASE--------------------------
        getCurrentUser(currentUid) {
            if (currentUid != null) {
                onSnapshot(doc(db, "users", currentUid), docSnapshot => {
                    this.currentUser = docSnapshot.data();
                    //console.log('DOC:', this.currentUser)
                });
            } else {
                return null
            }
        },

        loadCurrentUser() {
            if (this.currentUser != null) {
                return this.currentUser;
            } else {
                return null
            }
        },

        addRating(rate, book) {
            //console.log("rate: ", rate, "book: ", book.id);
            let by;
            let votesArray = book.votes;

            by = this.currentUser.id;

            let vote = {
                by,
                rate
            }

            console.log("CUANTOS VOTOS: ", votesArray);

            if (votesArray.length != 0) {
                console.log("SIIII", votesArray.length);

                let votePosition = votesArray.findIndex(v => v.by == by);
                //console.log("POSICION", votePosition);

                if (votePosition != -1) {
                    console.log("YA VOTO: ", votesArray[votePosition]);

                    //console.log("ARRAY EN EL VOTO", votesArray[votePosition].rate);
                    votesArray[votePosition].rate = rate;

                    updateDoc(doc(db, "products", book.id), {
                        "votes": votesArray
                    });

                } else {
                    console.log("NO HAY VOTO: ", votesArray[votePosition]);

                    votesArray.push(vote)

                    updateDoc(doc(db, "products", book.id), {
                        "votes": votesArray
                    });
                }

            } else {
                console.log("NOOO", votesArray.length);

                votesArray.push(vote)

                updateDoc(doc(db, "products", book.id), {
                    "votes": votesArray
                });
            }
        },

        addFavorites(book) {
            let favorite = this.currentUser.favorites;

            let favBookPosition = favorite.findIndex(v => v.id == book.id);

            if (favBookPosition != -1) {
                //console.log("YA ESTA DE FAVORITO", favBookPosition);

                favorite.splice(favBookPosition, 1)

                updateDoc(doc(db, "users", this.currentUser.id), {
                    "favorites": favorite
                });

            } else {
                favorite.push(book);
                updateDoc(doc(db, "users", this.currentUser.id), {
                    "favorites": favorite
                });
                //console.log("NO ESTA DE FAVORITO", favBookPosition);
            }
        },
    },
});