import React from 'react';
import './style.css';

export const Tile = ({type, id, children, clickHandler, draggable, dragstart, dragend, dragenter, dragleave, drop, dragover}) => {
    return (<div className={`tile ${type}`} id={id} onClick={clickHandler} draggable={draggable}
    onDragStart={dragstart}
    onDragEnd={dragend}
    onDragLeave={dragleave}
    onDragEnter={dragenter}
    onDrop={drop}
    onDragOver={dragover}>
        {children}
    </div>);
};