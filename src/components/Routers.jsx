import Message from "./chat/Message";
import { Route, Routes } from "react-router-dom";
import Chat from './chat/Chat';
import HomePage from './HomePage';

export default function Routers(props) {

    return(

        <Routes>
            <Route path="/" element={<HomePage/>}/>
                <Route path="/chat" element={<Chat data={props.data}/>}>
                <Route path=':chatID' element={<Message data={props.data}/>} />
                </Route>
        </Routes>
    )
} 