import Message from "./chat/Message";
import { Route, Routes } from "react-router-dom";
import Chat from './chat/Chat';
import HomePage from './HomePage';
import Profile from './Profile';
import Gists from "./Gists";

export default function Routers(props) {

    return(

        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/Gists" element={<Gists/>}/>
            <Route path="/Profile" element={<Profile/>}/>
                <Route path="/chat" element={<Chat/>}>
                <Route path=':chatID' element={<Message/>} />
            </Route>
        </Routes>
    )
} 