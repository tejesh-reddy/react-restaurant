import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import '../../../index.css';
import './style.css';
import { Typography } from '@material-ui/core';


export const PopupDetails = ({count, item, quantHandler, deleteHandler}) => {
    return(
    <>
    <Typography variant='body2'>{count}</Typography>
    <Typography variant='body2'>{item.name}</Typography>
    <Typography variant='body2'>${item.price}</Typography>
    <input type="number" placeholder="Number of servings" value={item.quantity} onChange={(event) => quantHandler(event, item.id)}/>
    <button className="clickable delete" data-testid="close-btn" onClick={() => deleteHandler(item.id)}><CloseIcon/></button>
    </>);
}