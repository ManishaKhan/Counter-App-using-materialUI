import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import {useSelector,useDispatch} from "react-redux"
import { increment,decrement } from './Actions/action';

export const Counter = () => {

    const counterState=useSelector((state)=>state.reducerFunction);

    const dispatch=useDispatch();

    const dec=()=>{
        if(counterState>0){
            dispatch(decrement())
        }
    }

    return (
        <>
        
        <div>
            
            <Box component="form" noValidate autoComplete="off">

                <IconButton aria-label="delete" onClick={()=>dispatch(increment(5))}><AddCircleOutlineIcon /></IconButton>

                <TextField label="Counter" color="secondary" focused value={counterState} />

                <IconButton aria-label="delete" onClick={()=>dec()}><RemoveCircleOutlineIcon /></IconButton>

            </Box>
        </div>
        </>
    )
}
