import React, { useEffect, useState } from 'react';
import './style.css';
import { PopupContent } from '../../molecules/PopupContent';

export const Popup = ({table, closeHandler, open, quantHandler, deleteHandler}) => {

	let [style, setStyle] = useState(open ? 'open' : 'popup');

	useEffect(
		() => {
			setStyle(open? 'open' : 'popup')
		},
		[open]
	);

    return(
		<div className={style} id='popup'>
			<PopupContent table={table} closeHandler={closeHandler} quantHandler={quantHandler} deleteHandler={deleteHandler}/>
		</div>
		);
};






