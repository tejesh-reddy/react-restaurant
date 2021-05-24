import React from 'react';
import { ItemDetails } from '.';

export default {
    component: ItemDetails,
    title: 'Item Details',
};

const Template = args => <ItemDetails {...args}/>

export const Default = Template.bind();
Default.args = {
    item: {
        id: 'item1',
        name: "Pizza",
        price: 10.00
    },
}