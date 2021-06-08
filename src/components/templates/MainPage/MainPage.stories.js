import React from 'react';
import { MainPage } from '.';
import { DefaultItems, DefaultTables } from '../../../helpers/data';
import { DefaultDrag } from '../../../helpers/dragHelper';

export default {
    component: MainPage,
    title: 'Main Page',
};

const Template = args => <MainPage {...args}/>

export const Default = Template.bind();
Default.args = {
    tables: DefaultTables,
    items: DefaultItems,
    drag: DefaultDrag,
    clickHandler: () => console.log('Clicked a table'),
};