import React from 'react';
import { Menu } from '.';

export default {
    component: Menu,
    title: 'Menu',
};

const Template = args => <Menu {...args}/>

export const Default = Template.bind();
Default.args = {
    items: [{
        id: 'item1',
            name: "Pizza",
            price: 10.00
        },
        {
        id: 'item2',
            name: "Burger",
            price: 5.00
        },
        {
        id: 'item3',
            name: "Spices",
            price: 1.00
        },
        {
        id: 'item4',
            name: "Biryani",
            price: 15.00
        },
        {
        id: 'item5',
            name: "Spaghetti",
            price: 20.00
        },
        {
        id: 'item6',
            name: "Chicken",
            price: 12.50
        },
        {
        id: 'item7',
            name: "Vegetable Soup",
            price: 8.50
        },
        {
        id: 'item8',
            name: "Biscuits",
            price: 1.50
        },
        {
        id: 'item9',
            name: "Chopsuey",
            price: 20.00
        }],
    drag: {
        start: () => {},
        end: () => {},
    },
};

export const WithDrag = Template.bind();
WithDrag.args = {
    ...Default.args,
    drag: {
        start: (ev, id) => {
            let element = document.getElementById(id);
            element.style.opacity = "0.5";
            ev.dataTransfer.dropEffect = "move";
            ev.dataTransfer.setData("text", id);
            element.style.opacity = "0.5";
        },
        end: (ev, id) => {
            ev.preventDefault();
            document.getElementById(id).style.opacity = "1";
        },
    },
};