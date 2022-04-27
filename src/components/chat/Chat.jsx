
import ChatList from './Chatlist';
import { Outlet } from 'react-router-dom';
import {TextField, Button} from '@mui/material/';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from '../../store/chats/actions';




export default function Chat(props) {

    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const chatList = useSelector(state => state.chat.chatList);
    const [, setDummy] = useState();

    const changValue = (e) => {
    setValue(e.target.value);
}

    const enterMessage = (e) => {
    if(e.code !== 'Enter') return;
    dispatch(addChat(value));
    setValue('');
    }

    const chatName = () => {
        dispatch(addChat(value));
        setDummy({})
        setValue('');
    }

    return (
        <>
        <div className=""
        style={{display: 'flex', alignItems: 'center',justifyContent: 'center', padding: '10px', marginBottom: '20px'}}>
            <TextField 
            value={value}
            onKeyDown={enterMessage}
            onChange={changValue} 
            id="outlined-basic" 
            label="INPUT YOUR CHAT" variant="outlined"
            style={{marginRight: '15px'}}/>
            <Button 
            onClick={chatName}
            variant="contained"
            style={{padding: '15px'}}>
            ADD CHAT
            </Button>
        </div>
        {chatList?.length > 0 ? chatList.map((elem, index) => {
           return (<ChatList data={elem} key={index}/>)
        }) : <h1 style={{textAlign: 'center'}}>ADD CHAT</h1>}
        <Outlet/>
        </>
    );
}