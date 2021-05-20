import React, { useEffect, useState } from 'react';
import { Tile } from '../Tile';
import './style.css';
import '../../index.css';

export const Tables = ({tables, amount, clickHandler, drag}) => {
    let [data, setData] = useState(tables);
    let [searchTerm, setSearchTerm] = useState('');

    const searchHandler = (event) => setSearchTerm(event.target.value.toLowerCase());

    useEffect(() => {
        setData(tables.filter((table) => table.heading.toLowerCase().includes(searchTerm)));
    }, [searchTerm, tables]);

    return (<div className='tables'>
        <div className='heading'><h3>Tables</h3></div>
        <div className='search'><input type="text" placeholder="Search tables" onChange={searchHandler}/></div>
        {(data.length !== 0)? data.map((table) => {
        return (<Tile key={table.id} id={table.id} type='table' clickHandler={(event) => clickHandler(table.id, table)}
                dragenter={(ev) => drag.enter(ev, table.id)} 
                dragleave={(ev) => drag.leave(ev, table.id)} 
                drop={(ev) => drag.drop(ev, table.id)}
                dragover={drag.over}>
                <h5 className="table-heading">{table.heading}</h5>
				<div className="table-details">
					<p>Items: {table.items.length}</p>
					<p>Bill Amount: {amount(table.items)}</p>
				</div>
            </Tile>)}) :(<Tile><p className='table-heading'>Nothing here</p></Tile>)}
    </div>);
};