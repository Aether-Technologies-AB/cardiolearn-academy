// lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  // CardioLearn Academy Firebase Configuration
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyBBgBCemWqlVFf11PdyorHzHCdCC8cKOBk",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "cardio-learn-academy.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "cardio-learn-academy",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "cardio-learn-academy.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "938679319921",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:938679319921:web:d024287dc2d49dbacf0ad0",
  measurementId: "G-0Q3VR2HTTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
