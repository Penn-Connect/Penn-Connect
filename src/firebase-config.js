import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyAq6FiTOt9hUV_HrjNJbbc5leNRzK4xr9Y",
    authDomain: "penn-connect-7c681.firebaseapp.com",
    projectId: "penn-connect-7c681",
    storageBucket: "penn-connect-7c681.appspot.com",
    messagingSenderId: "665586349615",
    appId: "1:665586349615:web:b8999c0bbcd3c7f76638da",
    measurementId: "G-VSTL11F3VR"
})

export const auth = app.auth()
export default app