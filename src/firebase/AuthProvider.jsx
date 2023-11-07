/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";




export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}
const logOut = () => {
    setLoading(true);
    return signOut(auth);
}

useEffect(()=> {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('user been spying');
        setUser(currentUser);
        setLoading(false);
    })
    return ()=> {
        unSubscribe();
    }
},[])



    

    const userInfo= {
        user, 
        signUp, 
        signIn, 
        logOut, 
        loading, 
        signInWithGoogle

    };
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;