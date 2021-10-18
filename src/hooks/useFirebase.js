import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import initAuthenticationFirebase from '../Firebase/Firebase.init';

initAuthenticationFirebase();
const useFirebase = () => {
    const [user, setUser] = useState();
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    // observe whether user state changed or not 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [])

    return {
        user,
        googleLogin,
        logOut
    }
};

export default useFirebase;