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
    const signOutUser = () => {
        localStorage.removeItem('userToken')
        setLoading(true)
        toast.success('Account signout')
        return signOut(auth)
    }

    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


const JWT = uu => {
    fetch('https://toy-car-trove-server.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(uu)
    })
        .then(res => res.json())
        .then(d => {
            console.log(d.token)
            localStorage.setItem('userToken', d.token)
        })
        .catch(e => console.log(e))
}



    useEffect(() => {
        const unsub = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            const localToken = localStorage.getItem('userToken')
            if (currentUser && currentUser?.email) {

                // fetch(`https://toy-car-trove-server.vercel.app/check`, {
                //     method: 'GET',
                //     headers: {
                //         'content-type': 'application/json',
                //         authorization: `Bearer ${localStorage.getItem('userToken')}`
                //     },
                // })
                // .then(res => res.json())
                // .then(d => {
                //     console.log(d)
                //     if(d.error ){
                //         toast.error('Session expire , Please login Again !!')
                //     }
                // })
                // .catch(e => console.log(e))




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
        JWT,


    }
    return (
        <AuthContext.Provider value={info}>
            {children}
            <Toaster />
        </AuthContext.Provider>
    );
};

export default AuthProvider;