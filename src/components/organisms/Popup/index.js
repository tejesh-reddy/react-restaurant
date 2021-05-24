import React from 'react';
import './style.css';
import { PopupContent } from '../../molecules/PopupContent';

export const Popup = ({table, closeHandler, open, quantHandler, deleteHandler}) => {

    return(
		(open !== true)? 
		(<div className="popup" id="popup">
			<PopupContent table={table} closeHandler={closeHandler} quantHandler={quantHandler} deleteHandler={deleteHandler}/>
		</div>) 
		: 
		(<div className='open' id='popup'> 
			<PopupContent table={table} closeHandler={closeHandler} quantHandler={quantHandler} deleteHandler={deleteHandler}/>
		</div>));
};






