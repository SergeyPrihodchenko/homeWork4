import Message from "./chat/Message";
import { Route, Routes } from "react-router-dom";
import Chat from './chat/Chat';
import HomePage from './HomePage';
import Profile from './Profile';
import Gists from "./Gists";
import Registration from "./Registration";
import Login from "./Login";
import RequireAuth from "../hocs/RequireAuth";
import {AuthProvider} from '../hooks/AuthProvider';

export default function Routers(props) {

    return(
        <AuthProvider>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            
            <Route path="/login" element={<Login/>}/>
            <Route path="/registration" element={<Registration/>}/>
            <Route element={<RequireAuth/>}>
                <Route path="/gists" element={<Gists/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/chat" element={<Chat/>}>
                    <Route path=':chatID' element={<Message/>} />
                </Route>
            </Route>
        </Routes>
        </AuthProvider>
    )
} 