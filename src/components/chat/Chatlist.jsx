import * as React from 'react';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import WorkIcon from '@mui/icons-material/Work';

export default function BasicList(props) {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' , margin: '0 auto'}}>
      <nav aria-label="main mailbox folders">
        <List>
            <Link to={`/chat/${props.data}`}>
                <ListItem disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <WorkIcon />
                </ListItemIcon>
                <ListItemText primary={props.data} />
                </ListItemButton>
            </ListItem>
            </Link>
        </List>
      </nav>
      <Divider />
    </Box>
  );
}