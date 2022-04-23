import {useState} from 'react';
import { changeVisible, getName } from '../store/profile/actions';
import { useDispatch, useSelector } from 'react-redux';

import * as React from 'react';
import { Box, Checkbox, TextField, Button} from '@mui/material/';






export default function Profile() {
    const {background, color, name} = useSelector(state => state.profile);
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const changeThem = (event) => {
        if(event.target.checked === true) {
            dispatch(changeVisible);
        } else {
            dispatch(changeVisible);
        }
    }

    const changValue = (e) => {
        setValue(e.target.value);
    }
    
    const changName = () => {
        dispatch(getName(value));
        setValue('');
    }

    const enterMessage = (event) => {
        if(event.code !== 'Enter' && event.value !== '') return;
        event.preventDefault();
        dispatch(getName(value));
        setValue('');
      }

    return(
<Box 
sx={{ width: 1 }} 
style={{background: `${background}`, color: `${color}`}}>
    <Box 
    display="grid" 
    gridTemplateColumns="repeat(12, 1fr)" 
    gap={2}>
        <Box 
        gridColumn="span 12">
            <h1 
            style={{textAlign: 'center'}}>
                Profile
            </h1>
        </Box>
        <Box 
        gridColumn="span 12">
            <Box 
            display="flex" 
            gridColum="span 12"
            style={{margin: '20px'}}>
                <img src="https://kipmu.ru/wp-content/uploads/sobakagkvn.jpg" alt=""  width="350" height="300"/>
                <div className="" 
                style={{padding: '20px'}}>
                    {name ? <p><strong>Name:</strong> {name}</p> : <span style={{color: 'red', fontWeight: "900"}}>'Enter UserName'</span>}
                    <p><strong>Surname:</strong> Maximus</p>
                    <p><strong>Age:</strong>25</p>
                    <Checkbox 
                    onChange={changeThem}/>
                    <br/>
                    <div className=""
                    style={{display: 'flex', alignItems: 'center', padding: '10px'}}>
                    <TextField 
                    value={value}
                    onKeyDown={enterMessage}
                     onChange={changValue} 
                     id="outlined-basic" 
                     label="INPUT YOUR NAME" variant="outlined"
                    style={{marginRight: '15px'}}/>
                    <Button 
                    onClick={changName}
                    variant="contained"
                    style={{padding: '15px'}}>
                        Change
                    </Button>
                    </div>
                </div>
            </Box>
        </Box>
    </Box>
</Box>
    );
}



