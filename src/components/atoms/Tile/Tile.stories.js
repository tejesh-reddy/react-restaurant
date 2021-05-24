import React from 'react';
import {  Tile } from '.';


export default {
    component: Tile,
    title: 'Tile'
};

const Template = args => <Tile {...args}><p>Sample</p><p>Data</p></Tile>


export const Default = Template.bind();
Default.args = {
};  

export const Table = Template.bind();
Table.args = {
    type: 'table',
};

export const ActiveTable = Template.bind();
ActiveTable.args = {
    type: 'table table-active',
};

export const MenuItem = Template.bind();
MenuItem.args = {
    type: 'menu-item',
};
