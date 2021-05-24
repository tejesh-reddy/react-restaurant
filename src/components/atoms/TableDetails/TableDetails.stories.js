import React from 'react';
import { TableDetails } from '.';

export default {
    component: TableDetails,
    title: 'Table Details',
};

const Template = args => <TableDetails {...args} />

export const Default = Template.bind();
Default.args = {
    data: {
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
    calcAmount: () => 0,
}