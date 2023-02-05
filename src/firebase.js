import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA38ivlnAigwUoBKMJLaG4Qci21zfKZ_XI",
  authDomain: "clone-2fecc.firebaseapp.com",
  projectId: "clone-2fecc",
  storageBucket: "clone-2fecc.appspot.com",
  messagingSenderId: "3876471027",
  appId: "1:3876471027:web:35c800cafcffe0b7d6b786",
  measurementId: "G-XW9403MPHV",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const db = getFirestore(app);
