import React from 'react';
import { DefaultTables } from '../../../helpers/data';
import { PopupContent } from '.';

export default {
    component: PopupContent,
    title: 'Popup Content',
};

const Template = args => <PopupContent {...args}/>;

export const Default = Template.bind();

Default.args = {
    table: DefaultTables[0],
    quantHandler: () => 1,
    deleteHandler: () => console.log('deleting element'),
    closeHandler: () => console.log('closing popup'),
}