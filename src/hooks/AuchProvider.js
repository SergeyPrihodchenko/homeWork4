import React, {useState} from 'react';
import firebaseConfigHooc from '../services/firebaseConfig';
import {
    getAuth, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut
} from 'firebase/auth';

let AuthContext = React.createContext(null);

export function AuthProvider({children}) {
    const [user, setUser] = useState();

    let signin = async(newUser, callBack) => {
        const auth = getAuth(firebaseConfigHooc);

        await signInWithEmailAndPassword(auth, newUser.email, newUser.password);
        await onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
        callBack();
    };

    let signout = async (callback) => {
        const auth = getAuth(firebaseConfigHooc);
        await signOut(auth);
        setUser(null);
        callback();
    };

    let value = {user, signin, signout};

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

let useAuth = () => {
    return React.useContext(AuthContext);
}

export default useAuth;