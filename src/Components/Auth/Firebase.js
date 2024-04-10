import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBzKymakFJRqDbFvFdwirlOddHDLgm233Q",
  authDomain: "codewars-d442a.firebaseapp.com",
  projectId: "codewars-d442a",
  storageBucket: "codewars-d442a.appspot.com",
  messagingSenderId: "266566613177",
  appId: "1:266566613177:web:d2db128f72bac1a28c8368"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);