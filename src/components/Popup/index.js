import React from 'react';
import './style.css';
import '../../index.css';

export const Popup = ({table, closeHandler, open, quantHandler, deleteHandler}) => {

	const PopContent = () => {
		let count = 0;
		return(
			<>
		<div className="backpop"></div>
			<div className="pop-container">
				<header>
					<h1>Bill | Order Details</h1>
					<button className="clickable close" id="closepop" onClick={closeHandler}>&times;</button>
				</header>
	
				{(Object.keys(table).length !== 0 && table.items.length !== 0)?
						<><Content/>
						{table.items.map((item) => {
							count += 1;
							return (
							<div className='content-table content' key={item.id + 'item'}>
							<p>{count}</p>
							<p>{item.name}</p>
							<p>${item.price}</p>
							<input type="number" placeholder="Number of servings" value={item.quantity} onChange={(event) => quantHandler(event, item.id)}/>
							<button className="clickable delete" onClick={() => deleteHandler(item.id)}>&times;</button>
							</div>
							);})}
						</> : <p className='empty'>No Items here</p>}
				</div>
				</>)};

    return((open !== true)? (<div className="popup" id="popup">
			<PopContent/>
		</div>) : (<div className='open' id='popup'> 
			<PopContent/>
			</div>));
};


const Content = ({children}) => {
	return(
	<div className="content-table" id="content-table">
		<p className="pop-heading">S.No</p>
		<p className="pop-heading">Name</p>
		<p className="pop-heading">Price</p>
		<p></p>
		<p></p>
	</div>)
};

