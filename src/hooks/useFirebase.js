import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result =>{
                const user = result.user;
                setUser(user)
                console.log(result.user);
            })
    }
    const logOut = () => {
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }

    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
              // User is signed out
              // ...
            }
          });
          
    },[])

    return{
        user,
        signInUsingGoogle,
        logOut
    }

}
export default useFirebase;