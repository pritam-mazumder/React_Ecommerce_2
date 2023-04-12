import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDAH9mGYzsDKJz2K7L8sKZS2FBTulXVnt4",
  authDomain: "react-app-6fde9.firebaseapp.com",
  databaseURL: "https://react-app-6fde9-default-rtdb.firebaseio.com",
  projectId: "react-app-6fde9",
  storageBucket: "react-app-6fde9.appspot.com",
  messagingSenderId: "945558659443",
  appId: "1:945558659443:web:fb365401f9970e36dce506",
};

const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
