import React from 'react';
import { PopupHeader } from '.';

export default {
    component: PopupHeader,
    title: 'Popup Header',
};

const Template = args => <PopupHeader {...args}/>

export const Default = Template.bind();
Default.args = {};