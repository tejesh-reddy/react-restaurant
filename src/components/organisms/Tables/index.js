import React, { useEffect, useState } from 'react';
import { Tile } from '../../atoms/Tile';
import './style.css';
import '../../../index.css';
import { SearchBar } from '../../atoms/SearchBar';
import { TableDetails } from '../../atoms/TableDetails';
import { Typography } from '@material-ui/core';

export const Tables = ({tables, amount, clickHandler, drag}) => {
    let [data, setData] = useState(tables);
    let [searchTerm, setSearchTerm] = useState('');

    const searchHandler = (event) => setSearchTerm(event.target.value.toLowerCase());

    useEffect(() => {
        setData(tables.filter((table) => table.heading.toLowerCase().includes(searchTerm)));
    }, [searchTerm, tables]);

    return (<div className='tables'>
        <div className='heading'><Typography variant='h3' style={{ fontWeight: 'bold' }}>Tables</Typography></div>
        <SearchBar placeholder='Search Tables' value={searchTerm} searchHandler={searchHandler}/>
        
        {(data.length !== 0)? data.map((table) => {
        return (<Tile key={table.id} id={table.id} type='table' clickHandler={(event) => clickHandler(table.id, table)}
                dragenter={(ev) => drag.enter(ev, table.id)} 
                dragleave={(ev) => drag.leave(ev, table.id)} 
                drop={(ev) => drag.drop(ev, table.id)}
                dragover={drag.over}>
                <TableDetails data={table} calcAmount={amount}/>
            </Tile>)}) :(<Tile><h3 className='table-heading'>Nothing here</h3></Tile>)}
    </div>);
};