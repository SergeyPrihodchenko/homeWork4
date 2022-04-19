import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function BasicTextFields(props) {

const [value, setValue] = React.useState('');

const changValue = (event) => {
  setValue(event.target.value);
}

const callValue = () => {
  setValue('');
  if(value === '') return;
  return {name: 'Sergo', message: value}
}

const enterMessage = (event) => {
  if(event.code !== 'Enter') return;
  props.addMessage(callValue);
  event.preventDefault();
}

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '55ch' },
        display: 'flex',
        justifyContent: 'Center',
        marginTop: '20px'
      }}
      noValidate
      autoComplete="off"
    >
      <TextField autoFocus value={value} onKeyDown={enterMessage} onChange={changValue} id="outlined-basic" label="Your messgae" variant="outlined" />
      <Button onClick={() => {props.addMessage(callValue)}} variant="contained" disableElevation style={{width: '25ch'}}>
      SEND MESSAGE
    </Button>
    </Box>
  );
}

