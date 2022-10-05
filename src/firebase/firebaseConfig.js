import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage'


// Project config
const firebaseConfig = {
    apiKey: "AIzaSyA6kUrfqXF9_ZvQox1NDbmS_g88qsNymL0",
    authDomain: "snowsport-media-application.firebaseapp.com",
    projectId: "snowsport-media-application",
    storageBucket: "snowsport-media-application.appspot.com",
    messagingSenderId: "80082454288",
    appId: "1:80082454288:web:9a2e20b5f024ec56794795",
    measurementId: "G-K23PT82FB4"
  };

// initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth, db, storage};



