import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import initAuthenticationFirebase from '../Firebase/Firebase.init';

initAuthenticationFirebase();
const useFirebase = () => {
    const [user, setUser] = useState();
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // loanding handling
    const [isLoading, setIsLoading] = useState(true);
    // loging handle 
    const [isLogin, setIsLogin] = useState(false);
    // login, registration, error handle
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // login with google
    const googleLogin = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const isLoggedInChecked = e => {
        setIsLogin(e.target.checked)
    }


    // get name, email and password onBlur for login-registration
    const nameOnBlur = e => {
        setName(e.target.value);
    }
    const emailOnBlur = e => {
        setEmail(e.target.value);
    }
    const passwordOnBlur = e => {
        setPassword(e.target.value);
    }

    // display name
    const setDisplayName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(result => { })
    }

    // verify email 
    const setVerifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => { })
    }


    // handle login-registration
    const handleLoginRegister = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError("Password must be at least 6 character");
            return
        } else {
            setError()
        }
        if (isLogin) {
            loginUser(email, password)
        } else {
            registerUser(email, password);
        }
    }

    // Register user
    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setDisplayName();
                setVerifyEmail();
                window.location = '/'
            })
            .catch(error => {
                setError("Email used, try with new email")
            })
    };

    // Login in user
    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                window.location = '/'
            })
            .catch(error => {
                setError('Wrong email or password')
            })


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
        isLoading,
        isLogin,
        isLoggedInChecked,
        nameOnBlur,
        emailOnBlur,
        passwordOnBlur,
        handleLoginRegister,
        error
    }
};

export default useFirebase;