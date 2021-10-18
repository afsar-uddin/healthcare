import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import initAuthenticationFirebase from '../Firebase/Firebase.init';

initAuthenticationFirebase();
const useFirebase = () => {
    const [user, setUser] = useState();
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [isLoading, setIsLoading] = useState(true)

    const googleLogin = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // observe whether user state changed or not 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser()
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, []);

    // Logout after sign in
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => { setIsLoading(false) });
    }

    return {
        user,
        googleLogin,
        logOut,
        isLoading
    }
};

export default useFirebase;