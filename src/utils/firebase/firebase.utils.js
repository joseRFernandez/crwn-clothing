import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalData) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userDocSnapshot = await getDoc(userDocRef);
  console.log(userDocSnapshot);
  console.log(userDocSnapshot.exists());

  // if user data does not exist in firestore, create it
  if (!userDocSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userDocRef;
};
