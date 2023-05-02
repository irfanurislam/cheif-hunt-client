import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

   const [user,setUser] = useState(null)
   const [loading,setLoading] = useState(true)

   console.log(user?.email)

 const createUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
 }
 const signIn = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
 }

 const signInWithGoogle = () =>{
   return signInWithPopup(auth,googleProvider)
}

// observe auth info  
useEffect(() =>{
   const unsubscribe = onAuthStateChanged(auth,currentUser =>{
       console.log('auth state change',currentUser)
       setUser(currentUser)
       setLoading(false)
   });
   return () =>{
       unsubscribe();
   }

},[])



const logOut = () =>{
   return signOut(auth)
}

 const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut
 }





    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;