import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchatapp-b538d.firebaseapp.com",
  projectId: "reactchatapp-b538d",
  storageBucket: "reactchatapp-b538d.firebasestorage.app",
  messagingSenderId: "1086892990613",
  appId: "1:1086892990613:web:b933a1a307f425cbb23b9c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auto = getAuth();
export const db = getFirestore();
