// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiQHqLjdanI4dv43UPoJRUc7riJ4eG84o",
  authDomain: "zaida-f80b2.firebaseapp.com",
  projectId: "zaida-f80b2",
  storageBucket: "zaida-f80b2.appspot.com",
  messagingSenderId: "673201633466",
  appId: "1:673201633466:web:3cc36eea16ace85ffb2a83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)