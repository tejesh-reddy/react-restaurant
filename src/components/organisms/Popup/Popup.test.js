import { render, screen } from '@testing-library/react';
import { Popup } from '.';
import { Default } from './Popup.stories';

describe('Popup Tests', () => {

    const args = Default.args;

    const element = render(<Popup {...args}/>);

    it('tests render', () => {
        expect(element).toBeDefined();
    });

});