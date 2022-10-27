import { defineStore } from "pinia";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import { db, auth } from "../firebase/config";
import { doc, setDoc, updateDoc, onSnapshot, addDoc } from "firebase/firestore";

///// OPTIONS STORE
export const useAuthenticationStore = defineStore("authentication", {
    state: () => ({
        isUser: null,
        user: {},
        currentUser: null,
    }),
    actions: {
        signIn(email, password) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert('User not found');
                });
        },

        signUp(email, password, name) {
            var ref;
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    ref = userCredential.user;
                })
                .then(() => {
                    this.user = {
                        name: name,
                        email: email,
                        favorites: [],
                        id: ref.uid,
                    }
                    setDoc(doc(db, "users", ref.uid), this.user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        },

        logOut() {
            signOut(auth).then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
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
            let stars;

            by = this.currentUser.id;

            let vote = {
                by,
                rate
            }

            //console.log("CUANTOS VOTOS: ", votesArray);

            if (votesArray.length != 0) {
                console.log("SIIII", votesArray.length);

                let votePosition = votesArray.findIndex(v => v.by == by);
                console.log("POSICION", votePosition);
                
                if (votePosition != -1){
                    console.log("YA VOTO: ", votesArray[votePosition]);

                    console.log("ARRAY EN EL VOTO", votesArray[votePosition].rate);
                    votesArray[votePosition].rate = rate;

                    updateDoc(doc(db, "products", book.id), {
                        "votes": votesArray
                    });
                    
                }else{
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
    },
});