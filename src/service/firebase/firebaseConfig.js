import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { config } from "../../config/config";

const firebaseConfig = {
  apiKey: config.VITE_APP_API_KEY,
  authDomain: config.VITE_APP_AUTHDOMAIN,
  projectId: config.VITE_APP_PROJECTID,
  storageBucket: config.VITE_APP_STORAGEBUCKET,
  messagingSenderId: config.VITE_APP_MESSAGINGSENDERID,
  appId: config.VITE_APP_APPID,
  measurementId: config.VITE_APP_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();