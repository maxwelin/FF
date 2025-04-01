import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvdMLbcQBiQRMQLEvY2V4Df8E6Sx6GOAs",
  authDomain: "friluftsfarder.firebaseapp.com",
  projectId: "friluftsfarder",
  storageBucket: "friluftsfarder.firebasestorage.app",
  messagingSenderId: "715921909686",
  appId: "1:715921909686:web:5a8fd0d9ab56c953050317",
  measurementId: "G-MZ45XJHEG3",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, collection, getDocs };
