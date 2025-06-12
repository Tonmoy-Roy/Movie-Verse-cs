import { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../../../firebase.config';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); {/*user ache kina check krtese*/ }
    const [loading, setLoading] = useState(true); {/*true" means: "I'm still checking!*/ }
    const provider = new GoogleAuthProvider();

    function createUser(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function signinUser(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function signwithGoogle() {
        return signInWithPopup(auth, provider);
    }

    function updateUser(updateduser) {
        return updateProfile(auth.currentUser, updateduser);
    }

    function signoutUser() {
        return signOut(auth);
    }

    const authinfo = {
        user, loading, createUser, signinUser, updateUser, signoutUser, signwithGoogle
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false); {/*false" means: "Check is done, I know the user's status now.*/ }

        })
        return unsubscribe;
    }, [])

    return (
        <div>
            <AuthContext.Provider value={authinfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;