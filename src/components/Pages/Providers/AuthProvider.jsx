/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {  createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
import app from "../../Firebase/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth/web-extension";

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ( { children }) => {

  const [user,setUser] =useState(null);
  const [loading, setLoading] = useState(true);

  const createSignUp = (email,password) =>{
    setLoading(true)
  return  createUserWithEmailAndPassword(auth, email, password)
} 

const createSignIn = (email,password)=>{
  setLoading(true)
  return signInWithEmailAndPassword(auth,email,password)
}

const logOut = ()=>{
  setLoading(true)
  return signOut(auth)
}

   useEffect( ()=>{
    const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser)
      console.log('crnt user',currentUser);
      setLoading(false)
     })
  
      return() =>{
         return unSubscribe()
      }


   } )

    const authInfo ={
      user,
      loading,
        createSignUp,
        createSignIn,
        logOut

    }
    return (
       <AuthContext.Provider value={authInfo}>
         {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;