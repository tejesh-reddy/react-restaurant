import React from 'react';
import { PopupDetails } from '.';
import { DefaultItems } from '../../../helpers/data';

export default {
    component: PopupDetails,
    title: 'Popup Details',
};

const Template = args => <PopupDetails {...args}/>

export const Default = Template.bind();
Default.args = {
    count: 1,
    item: DefaultItems[0],
    quantHandler: () => 1,
    deleteHandler: () => console.log('deleting item'),
};