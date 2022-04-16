import Input from './Input';
import ChatList from './Chatlist';
import { Outlet } from 'react-router-dom';


export default function Chat(props) {
    return (
        <>
        {props.data.chatsName.length !== 0 ? props.data.chatsName.map((elem) => {
           return (<ChatList data={elem}/>)
        }) : null}
        <Input/>
        <Outlet/>
        </>
    );
}