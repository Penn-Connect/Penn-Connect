import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase-config'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    //connect to firebase signup function
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    //connect to firebase login function
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    //connect to firebase logout function
    function logout() {
        return auth.signOut()
    }

    //change state of user if Authentication State Changes
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged( user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    //exporting functions using value={value} on AuthContext
    const value = {
        currentUser,
        login,
        logout,
        signup
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}