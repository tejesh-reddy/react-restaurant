import { Typography } from '@material-ui/core';
import React from 'react';
import './style.css';

export const ItemDetails = ({item}) => {
    return (
        <>
        <Typography variant='p' className="item-heading" style={{ fontWeight: 'bold' }}>{item.name}</Typography>
		<div className="item-details">
			<p>Price: ${item.price}</p>
		</div>
        </>
    );
}