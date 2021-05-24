import React from 'react';
import { Menu } from '../../organisms/Menu';
import { Tables } from '../../organisms/Tables';
import './style.css';

export const MainPage = ({tables, items, clickHandler, drag}) => {

    const calculateAmount = (items) => {
        let amount = 0;
        for(let item of items){
          amount += item.price * item.quantity;
        }
    
        return amount;
      };

    return (
        <>
        <header>
			    <h1>ZeMoSo Restaurant</h1>
		    </header>
        <div className='page'>
            <Tables tables={tables} amount={(items) => calculateAmount(items)} clickHandler={clickHandler} drag={drag}/>
            <Menu items={items} drag={drag}/>
        </div>
        </>
    );
}