import React, { useEffect, useState } from 'react';
import { Tile } from '../../atoms/Tile';
import './style.css';
import '../../../index.css';
import { SearchBar } from '../../atoms/SearchBar';
import { ItemDetails } from '../../atoms/ItemDetails';
import { Typography } from '@material-ui/core';


export const Menu = ({items, drag}) => {
    let [data, setData] = useState(items);
    let [searchTerm, setSearchTerm] = useState('');

    const searchHandler = (event) => setSearchTerm(event.target.value.toLowerCase());

    useEffect(() => {
        setData(items.filter((item) => item.name.toLowerCase().includes(searchTerm)));
    }, [searchTerm, items]);

    return (<div className='menu'>
        <div className='heading'><Typography variant='h3' style={{ fontWeight: 'bold' }}>Menu</Typography></div>
        <SearchBar placeholder="Search Menu" value={searchTerm} searchHandler={searchHandler}/>
        {
            (data.length !== 0)? data.map((item) => {
            return (
            <Tile key={item.id} id={item.id} type='menu-item' draggable={true} dragstart={(ev) => drag.start(ev, item.id)} dragend={(ev) => drag.end(ev, item.id)}>
                    <ItemDetails item={item}/>
            </Tile>)})
            :
            (<Tile><h3 className='item-heading'>Nothing here</h3></Tile>)
        }
    </div>);
}