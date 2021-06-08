import { render, screen } from '@testing-library/react';
import { PopupContent } from '.';
import { Default } from './PopupContent.stories';

describe('Popup Content Tests', () => {

    const args = Default.args;

    const element = render(<PopupContent {...args}/>);

    it('tests render', () => {
        expect(element).toBeDefined();
    });

});