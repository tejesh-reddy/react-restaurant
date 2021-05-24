import { Typography } from '@material-ui/core';
import React from 'react';
import './style.css';

export const TableDetails = ({data, calcAmount}) => {
    return(
    <>
    <Typography variant='p' style={{ fontWeight: 'bold' }} className="table-heading">{data.heading}</Typography>
    <div className="table-details">
        <Typography variant='p'>Items: {data.items.length}</Typography>
        <br/>
        <Typography variant='p'>Bill Amount: ${calcAmount(data.items)}</Typography>
    </div>
    </>);
}