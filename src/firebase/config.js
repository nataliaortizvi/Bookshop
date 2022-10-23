// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useAuthenticationStore } from "../stores/authentication";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTOBKS9ww04WM0IAMIsCMIW1oFV71d7GI",
  authDomain: "bookshop-90026.firebaseapp.com",
  projectId: "bookshop-90026",
  storageBucket: "bookshop-90026.appspot.com",
  messagingSenderId: "887614558074",
  appId: "1:887614558074:web:f76f897e2912b5ed7d50c3",
  measurementId: "G-3FT1HTRBR7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  const authStore = useAuthenticationStore();
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;

    authStore.user = user;
    //console.log(authStore.user)

  } else {
    // User is signed out
    authStore.user = null;
    //console.log(authStore.user)
  }
});



// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { auth }
export { db }
