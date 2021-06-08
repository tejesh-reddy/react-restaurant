import React from 'react';
import { Popup } from '.';

export default {
    component: Popup,
    title: 'Pop Up',
};

const Template = args => <Popup {...args}/>


export const Default = Template.bind();
Default.args = {
    table: {},
    closeHandler: () => console.log('closing the popup'),
    quantHandler: () => 1,
    deleteHandler: () => console.log('deleted an item'),
    open: true,
};

export const WithTable = Template.bind();
WithTable.args = {
    ...Default.args,
    table: {
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
}