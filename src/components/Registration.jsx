import { Button, TextField } from "@mui/material";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react"
import { Link } from "react-router-dom";
import firebaseConfig from "../services/firebaseConfig";
import {ToastContainer, toast} from 'react-toastify';

export default function Registration() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    } 

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    } 

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            let auth = getAuth(firebaseConfig);
            await createUserWithEmailAndPassword(auth, email, password);
            setEmail('');
            setPassword('');
            toast.success('Вы зарегистрировались!');
        } catch(e) {
            console.log(e);
            toast.error('Ошибка при регистрации');
        }
    }
    return (
        <>
        <ToastContainer/>
        <h3
        style={{
            paddingLeft: '20px'
        }}
        >Registration</h3>
        <form onSubmit={onSubmit}>
        <TextField
        style={{
            display: 'block',
            margin: '10px',
            padding: '10px'
        }}
        placeholder="enter your email"
        name="email"
        type='email'
        onChange={handleEmailChange}
        value={email}
        required
        />
        <TextField
        style={{
            display: 'block',
            margin: '10px',
            padding: '10px'
        }}
        placeholder="enter your password"
        name="password"
        type='password'
        onChange={handlePasswordChange}
        value={password}
        required
        />
        <Button type="sumit"
        style={{
            backgroundColor: '#aeebcf',
            padding: '10px',
            margin: '20px',
        }}
        >Sign up</Button>
        <p style={{paddingLeft: '20px'}}>Already registered ? <Link to="/login" style={{color: 'blue'}}>Sign in</Link></p>
        </form>
        <p>{error}</p>
        </>
    )
}