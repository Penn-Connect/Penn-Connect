// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

//import Authentitation firebase modules
import { getAuth, GoogleAuthProvider } from 'firebase/app'


//add SDKs for Firebase products that we want to use
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq6FiTOt9hUV_HrjNJbbc5leNRzK4xr9Y",
  authDomain: "penn-connect-7c681.firebaseapp.com",
  projectId: "penn-connect-7c681",
  storageBucket: "penn-connect-7c681.appspot.com",
  messagingSenderId: "665586349615",
  appId: "1:665586349615:web:b8999c0bbcd3c7f76638da",
  measurementId: "G-VSTL11F3VR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


//exported since used in other routes
//init firestore db
export const db = getFirestore(app)
//init firebase auth
export const auth = getAuth(app)
//init firebase google auth provider
export const provider = new GoogleAuthProvider();