import { useParams } from 'react-router-dom';
import * as React from 'react';
import MessageTemplate from './MessageTemplate';
import Input from './Input';

import List from '@mui/material/List';


export default function PinnedSubheaderList(props) {

    const {chatID} = useParams();

    const [chatMessage, setChatMessage] = React.useState(chatID);
    const [renderDataMessage, setRenderDataMessage] = React.useState(props.data.chats[chatID]);

    React.useEffect(() => {
      setChatMessage(chatID);
      setRenderDataMessage(props.data.chats[chatID]);
    }, [chatID]);

    const addMessage = (newMess) => {
      if(newMess() === undefined) return;
      setRenderDataMessage([newMess(), ...props.data.chats[chatID]]);
      props.data.chats[chatID] = [ newMess(), ...props.data.chats[chatID]];
    }

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
      {renderDataMessage !== undefined ? renderDataMessage.map((el, ind) => (
        <li key={ind}>
            {<MessageTemplate data={el}/>}
        </li>
      )) : null}
    </List>
    <Input data={props.data.chats} addMessage={addMessage}/>
    </div>
  );
}