import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, deleteDoc, doc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBKs_0tOsl6OrDQOSTQDD4ghHv3PHLNFqo",
  authDomain: "money-saving-community.firebaseapp.com",
  projectId: "money-saving-community",
  storageBucket: "money-saving-community.firebasestorage.app",
  messagingSenderId: "1023049683110",
  appId: "1:1023049683110:web:fa5c36a12cb20440412467",
  measurementId: "G-1K6718VQSL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export { deleteDoc, doc };
export default app;