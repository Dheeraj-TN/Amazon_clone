import React from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { useState,useEffect } from 'react';
import { auth } from './firebase';
const Details = () => {
    const [authuser, setAuthUser] = useState(null);
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            }
            else {
                setAuthUser(null);
            }
        })
    }, []);

    return (
        <div>
            {authuser ?
                <>
                    <p>{`Signed in as ${authuser.email}`}</p>
                    
                </> :
                <p>Signed out</p>
            }
        </div>
    )
}

export default Details;
