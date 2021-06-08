import React from 'react';
import { Typography } from "@material-ui/core";
import './style.css';

export const PopupHeader = ({children}) => {
	return(
	<div className="content-table" id="content-table">
		<Typography variant='h3' className="pop-heading">S.No</Typography>
		<Typography variant='h3' className="pop-heading">Name</Typography>
		<Typography variant='h3' className="pop-heading">Price</Typography>
		<Typography variant='h3' className="pop-heading">Quantity</Typography>
		<p></p>
	</div>)
};