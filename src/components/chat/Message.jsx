import { useParams } from 'react-router-dom';
import MessageTemplate from './MessageTemplate';

import List from '@mui/material/List';


export default function PinnedSubheaderList(props) {

    const {chatID} = useParams();

  return (
    <div className="" style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
        <List
      sx={{  
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      {props.data[chatID] !== undefined ? props.data[chatID].map((el, ind) => (
        <li key={ind}>
            {<MessageTemplate data={el}/>}
        </li>
      )) : null}
    </List>
    </div>
  );
}