import {useState} from 'react';
import { changeVisible } from '../store/profile/actions';
import { useDispatch, useSelector } from 'react-redux';

import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';




export default function Profile() {
    const {background, color} = useSelector(store => store);
    const dispatch = useDispatch();
    const [, setDummy] = useState();

    const changeThem = (event) => {
        if(event.target.checked === true) {
            dispatch(changeVisible);
        setDummy({});
        } else {
            dispatch(changeVisible);
        }
    }
    

    return(
<Box sx={{ width: 1 }} style={{background: `${background}`, color: `${color}`}}>
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 12">
            <h1 style={{textAlign: 'center'}}>Profile</h1>
        </Box>
        <Box gridColumn="span 12">
            <Box display="flex" gridColum="span 12"
            style={{margin: '20px'}}>
                <img src="https://kipmu.ru/wp-content/uploads/sobakagkvn.jpg" alt=""  width="350" height="300"/>
                <div className="" style={{padding: '20px'}}>
                    <p><strong>Name:</strong> Max</p>
                    <p><strong>Surname:</strong> Maximus</p>
                    <p><strong>Age:</strong> 25</p>
                    <Checkbox onChange={changeThem} defaultChecked />
                </div>
            </Box>
        </Box>
    </Box>
</Box>
    );
}



