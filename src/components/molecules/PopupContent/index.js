import React from 'react';
import '../../../index.css';
import './style.css';
import CloseIcon from '@material-ui/icons/Close';
import { PopupDetails } from '../../atoms/PopupDetails';
import { PopupHeader } from '../../atoms/PopupHeader';

export const PopupContent = ({table, closeHandler, quantHandler, deleteHandler}) => {
    let count = 0;

    return(
        <>
        <div className="backpop"></div>
        <div className="pop-container">
            <header>
                <h1>Bill | Order Details</h1>
                <button className="clickable close" id="closepop" onClick={closeHandler}><CloseIcon/></button>
            </header>

            {(Object.keys(table).length !== 0 && table.items.length !== 0)?
                    <><PopupHeader/>
                    {table.items.map((item) => {
                        count += 1;
                        return (
                        <div className='content-table content' key={item.id + 'item'}>
                        <PopupDetails count={count} item={item} quantHandler={quantHandler} deleteHandler={deleteHandler}/>
                        </div>
                        );})}
                    </> : <p className='empty'>No Items here</p>}
            </div>
        </>);
};