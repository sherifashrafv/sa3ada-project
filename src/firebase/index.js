import { initializeApp } from "firebase/app";
// import { initializeFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCATxRF-Yo1VsOaDhfY0KXE01SutPJ3CYE",
  authDomain: "sa3ada-app.firebaseapp.com",
  projectId: "sa3ada-app",
  storageBucket: "sa3ada-app.appspot.com",
  messagingSenderId: "474900292139",
  appId: "1:474900292139:web:5f83e82fa2341a263cc06e",
};

// const dd = firebaseApp.firestore();
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage();
const auth = getAuth();
const database = getDatabase(app);
export { db, storage, auth, database };
