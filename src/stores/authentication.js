import { defineStore } from "pinia";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

///// OPTIONS STORE
export const useAuthenticationStore = defineStore("authentication", {
    state: () => ({
        user: null
    }),
    actions: {
        signIn(email, password) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log('entro', user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert('User not found');
                });
        },
       /* signUp(email, password) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        },*/
        async signUp(email, password) {
            try{
                const userCredential = await createUserWithEmailAndPassword(auth, email, password)
                console.log(userCredential.user)
            } catch(error) {
                alert(errorMessage);
            }
        },

        signOut() {
            signOut(auth).then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
                alert(error);
            });
        },
        logOut() {
            signOut(auth).then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
        },
    },
});