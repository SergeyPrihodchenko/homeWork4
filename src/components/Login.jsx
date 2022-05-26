import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import useAuth from "../hooks/AuthProvider";

export default function Login() {

    let navigate = useNavigate();
    let location = useLocation();
    const auth = useAuth();

    const [email, setEmail] = useState();
    const  [password, setPassword] = useState();
    const [error, setError] = useState();

    let from = location.state?.from?.pathnane || '/';

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await auth.signin({email, password}, () => {
                setTimeout(() => {
                    navigate(from, {replace: true});
                }, 200)
            });

        } catch(e) {
            console.log(e);
            toast.error('Неверный логин или пароль!');
            setError(e);
        }
    }

    return (
        <div className="height">
        <ToastContainer/>
        <form onSubmit={handleSubmit}>
            <h3 style={{paddingLeft: '20px'}}>Login</h3>
            <p style={{paddingLeft: '20px'}}>Enter email and password for auth authentication</p>
            <div className="loginForm">
                <TextField
                style={{
                    marginBottom: '15px',
                    display: 'block'
                }}
                placeholder="Enter your email"
                name=""
                type='text'
                value={email}
                onChange={handleEmail}
                />
                <TextField
                style={{
                    display: 'block'
                }}
                placeholder="Enter your password"
                name=""
                type='password'
                value={password}
                onChange={handlePassword}
                />
            </div>

            {error && <p>{error}</p>}
            <Button variant="outlined" type="submit" style={{marginLeft: '20px', padding: '10px 20px'}}>Enter</Button>
        </form>
        </div>
    );
}