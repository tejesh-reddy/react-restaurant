import React, { useEffect, useState } from 'react';
import { Tile } from '../Tile';
import './style.css';
import '../../index.css';


export const Menu = ({items, drag}) => {
    let [data, setData] = useState(items);
    let [searchTerm, setSearchTerm] = useState('');

    const searchHandler = (event) => setSearchTerm(event.target.value.toLowerCase());

    useEffect(() => {
        setData(items.filter((item) => item.name.toLowerCase().includes(searchTerm)));
    }, [searchTerm, items]);

    return (<div className='menu'>
        <div className='heading'><h3>Menu</h3></div>
        <div className='search'><input type="text" placeholder="Search tables" onChange={searchHandler}/></div>
        {(data.length !== 0)? data.map((item) => {
        return (<Tile key={item.id} id={item.id} type='menu-item' draggable={true} dragstart={(ev) => drag.start(ev, item.id)} dragend={(ev) => drag.end(ev, item.id)}>
				<h5 className="item-heading">{item.name}</h5>
				<div className="item-details">
					<p>Price: ${item.price}</p>
				</div>
            </Tile>)}) :(<Tile><p className='item-heading'>Nothing here</p></Tile>)}
    </div>);
}