import React from 'react';
import { SearchBar } from '.';

export default {
    component: SearchBar,
    title: 'Search Bar',
}

const Template = args => <SearchBar {...args}/>;

export const Default = Template.bind();
Default.args = {
    placeholder: 'Search',
    changeHandler: () => 'changed',
};