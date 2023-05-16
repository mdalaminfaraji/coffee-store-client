import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
const auth = getAuth(app);
export const AuthContext=createContext();
const googleProvider=new GoogleAuthProvider();
const githubProvider=new GithubAuthProvider();
const AuthProviders = ({children}) => {
    const [user, setUser]=useState(null);
    const [loading, setLoading]=useState(true);

  const  createUser=(email, password)=>{
    setLoading(true);
          return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn=(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
const logOut=()=>{
    setLoading(true);
    return signOut(auth);
}
const googleSignIn=()=>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
}

   
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, 
            currentUser=>{
                setUser(currentUser);
                setLoading(false);
                console.log(currentUser);
            });
            return ()=>{
                return unsubscribe();
            }
    })
    const authInfo={
        user,
        createUser, signIn, googleSignIn, loading, logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;