import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';




export default function BasicTabs() {


  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs aria-label="basic tabs example">
          <Link to={'/'}><Tab label="Home"/></Link>
          <Link to={'/chat'}><Tab label="Chats"/></Link>
        </Tabs>
      </Box>
    </Box>
  );
}