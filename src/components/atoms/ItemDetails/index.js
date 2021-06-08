import { Typography } from '@material-ui/core';
import React from 'react';
import './style.css';

export const ItemDetails = ({item}) => {
    return (
        <>
        <Typography variant='body1' className="item-heading" >{item.name}</Typography>
		<div className="item-details">
			<p>Price: ${item.price}</p>
		</div>
        </>
    );
}