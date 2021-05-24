import React from 'react';
import './style.css';

export const SearchBar = ({placeholder, value, searchHandler}) => {
    return  (
    <div className='search'>
        <input type="text" placeholder={placeholder} value={value} onChange={searchHandler}/>
    </div>);
}