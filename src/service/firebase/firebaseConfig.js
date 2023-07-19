import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey:"AIzaSyCLTDZXLAgquTwhVR5fuVPNIBxIkCwX4_M",
  authDomain:"musimundo-41c8f.firebaseapp.com",
  projectId:"musimundo-41c8f",
  storageBucket:"musimundo-41c8f.appspot.com",
  messagingSenderId: "634668376097",
  appId:"1:634668376097:web:dd4351b59cc0df93a68360",
  measurementId:"G-ZESVS9H402"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);