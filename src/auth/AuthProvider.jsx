import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../utils/firebase.config';
import { Toaster, toast } from 'react-hot-toast';
const auth = getAuth(app)
export const AuthContext = createContext()


const AuthProvider = ({ children }) => {
   
    const [path, setPath] = useState('/')
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    const signOutUser = () => {
        setLoading(true)
        toast.success('Account signout')
        return signOut(auth)
    }



    useEffect(() => {
        const unsub = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if(currentUser && currentUser?.email){
                const loggedUser = {
                    email: currentUser.email,

                }
                fetch('http://localhost:3000/jwt',{
                    method :'POST', 
                    headers: {
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(loggedUser)
                })
                .then(res => res.json())
                .then(d => {
                    console.log(d.token)
                    localStorage.setItem('userToken',d.token)
                })
                .catch(e=> console.log(e))
            }
            setLoading(false)
        })
        return () => {
            return unsub()
        }
    }, [])






    const info = {
        auth,
        user,
        createUser,
        loginUser,
        signOutUser,
        loading,
        loginWithGoogle,
        path,
        setPath,


    }
    return (
        <AuthContext.Provider value={info}>
            {children}
            <Toaster />
        </AuthContext.Provider>
    );
};

export default AuthProvider;