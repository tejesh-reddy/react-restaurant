import React from 'react';
import { Tables } from '.';


export default {
    component: Tables,
    title: 'Tables',
};

const tables = [
    {
        id: 'table1',
        heading: 'First Customer',
        items: [{
          id: 'item1',
          name: "Pizza",
          price: 10.00,
          quantity: 1,
        },
        {
          id: 'item2',
          name: "Burger",
          price: 5.00,
          quantity: 4,
        },
        {
          id: 'item3',
          name: "Spices",
          price: 1.00,
          quantity: 2,
        },],
      },
      {
        id: 'table2',
        heading: 'Second Customer',
        items: [],
      },
      {
        id: 'table3',
        heading: 'Third Customer',
        items: [],
      },
];

const drag = {
    start: (ev, id) => {},
    end: ()=>{},
    leave: ()=>{},
    drop: ()=>{},
    enter: ()=>{},
    over: ()=>{},
  }

const Template = args => <Tables {...args}/>;

export const Default = Template.bind();
Default.args = {
    tables: tables,
    amount: ()=>0,
    clickHandler: () => console.log('clicked'),
    drag: drag,
};

export const WithActiveTables = Template.bind();
WithActiveTables.args = {
    ...Default.args,
    clickHandler: (id, table) => {
        document.getElementById(id).classList.toggle('table-active');
    } 
}