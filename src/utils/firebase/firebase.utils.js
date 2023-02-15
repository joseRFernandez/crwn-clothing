import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFS4XMbWXAH_gPzmjypoYEoMDGHfhjjGg",
  authDomain: "crwn-clothing-db-842b6.firebaseapp.com",
  projectId: "crwn-clothing-db-842b6",
  storageBucket: "crwn-clothing-db-842b6.appspot.com",
  messagingSenderId: "459903742156",
  appId: "1:459903742156:web:aa3b68caffad96528f9269",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
