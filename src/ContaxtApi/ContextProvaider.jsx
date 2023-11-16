import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";
 export const authContext = createContext();

const ContextProvaider = ({children}) => {
     const [user,setUser] = useState(null);
     const [lodding,setLogging] =useState(true);
        
     const createUserSingUp =(email,password)=>{
        setLogging(true)
        return createUserWithEmailAndPassword(auth,email,password)

     }

     const singInUser=(email,password)=>{
        setLogging(true)
        return signInWithEmailAndPassword(auth,email,password)
     }

     
    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth,currentUser=>{
            setLogging(false)
            setUser(currentUser)
            console.log(currentUser);
        })
        return ()=>{
            unSubcribe()
        }
    },[])
    const logOut =()=>{
       return signOut(auth)
    }

//    const ProfileUpdate = (userProfile)=>{
//     return updateProfile(auth.userProfile)
//    }




    const userInfo = {
        user,
        lodding,
        createUserSingUp,
        singInUser,
        logOut,
        
    }


    return (
        <div>
            <authContext.Provider value={userInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default ContextProvaider;