import { useParams } from 'react-router-dom';
import * as React from 'react';
import MessageTemplate from './MessageTemplate';
import Input from './Input';

import List from '@mui/material/List';
import { useDispatch, useSelector } from 'react-redux';
import { addMessages } from '../../store/messages/actions';


export default function PinnedSubheaderList() {
  
  const {chatID} = useParams();
  const messages = useSelector(state => state.messages.messageList);


  const dispatch = useDispatch();
  const [, setDummy] = React.useState('');


    const addMessage = (newMess) => {
      if(newMess() === undefined) return;
      dispatch(addMessages(chatID, newMess()));
      setDummy({});
    }
    console.log(messages);
  return (
    <div className="" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '30px'}}>
        <List
      sx={{  
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 180,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      {messages[chatID] !== undefined ? messages[chatID].map((el, ind) => (
        <li key={ind}>
            {<MessageTemplate data={el}/>}
        </li>
      )) : null}
    </List>
    <Input addMessage={addMessage}/>
    </div>
  );
}