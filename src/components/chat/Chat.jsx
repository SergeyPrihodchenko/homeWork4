
import ChatList from './Chatlist';
import { Outlet } from 'react-router-dom';


export default function Chat(props) {
    return (
        <>
        {props.data.chatsName.length !== 0 ? Object.keys(props.data.chats).map((elem) => {
           return (<ChatList data={elem}/>)
        }) : null}
        <Outlet/>
        </>
    );
}