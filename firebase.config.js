import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAvnDu0Oh_ZThCZl1BboQzW882C3Hk5CnE",
  authDomain: "react-app-91087.firebaseapp.com",
  databaseURL: "https://react-app-91087-default-rtdb.firebaseio.com",
  projectId: "react-app-91087",
  storageBucket: "react-app-91087.appspot.com",
  messagingSenderId: "787824366581",
  appId: "1:787824366581:web:5d5c513de955cf043986bc",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
