import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "solidify-a58d3.firebaseapp.com",
  projectId: "solidify-a58d3",
  storageBucket: "solidify-a58d3.firebasestorage.app",
  messagingSenderId: "1041134419643",
  appId: "1:1041134419643:web:7f6ae12f7d5ec61296b39e",
  measurementId: "G-Q6DMGR956G",
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app);

