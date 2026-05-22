import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDwt-TuuaB6xLjlzcYs8IbwaXaYnyiOFvA",
  authDomain: "book-list-with-firebase-155fa.firebaseapp.com",
  projectId: "book-list-with-firebase-155fa",
  storageBucket: "book-list-with-firebase-155fa.firebasestorage.app",
  messagingSenderId: "219347837698",
  appId: "1:219347837698:web:f3ebe4f371ca6711fe181b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)