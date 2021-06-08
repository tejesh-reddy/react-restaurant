import { render, screen } from '@testing-library/react';
import { PopupDetails } from '.';
import { Default } from './PopupDetails.stories';

describe('Item Details Tests', () => {

    const args = Default.args;

    const element = render(<PopupDetails {...args}/>);

    it('tests render', () => {
        expect(element).toBeDefined();
    });

});