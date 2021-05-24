import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import '../../../index.css';
import './style.css';


export const PopupDetails = ({count, item, quantHandler, deleteHandler}) => {
    return(
    <>
    <p>{count}</p>
    <p>{item.name}</p>
    <p>${item.price}</p>
    <input type="number" placeholder="Number of servings" value={item.quantity} onChange={(event) => quantHandler(event, item.id)}/>
    <button className="clickable delete" onClick={() => deleteHandler(item.id)}><CloseIcon/></button>
    </>);
}