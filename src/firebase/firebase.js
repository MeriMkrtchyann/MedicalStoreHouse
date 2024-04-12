import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID,
    // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
    apiKey: "AIzaSyCEGdXbV1h8Ohn0WLLZncqC1XSD0106W4A",
    authDomain: "gurgen-60771.firebaseapp.com",
    databaseURL: "https://gurgen-60771-default-rtdb.firebaseio.com",
    projectId: "gurgen-60771",
    storageBucket: "gurgen-60771.appspot.com",
    messagingSenderId: "260042119084",
    appId: "1:260042119084:web:06470765eecaa48a084c09",
    measurementId: "G-3B8LS6P1PL"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
