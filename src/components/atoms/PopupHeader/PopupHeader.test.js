import { render, screen } from '@testing-library/react';
import { PopupHeader } from '.';
import { Default } from './PopupHeader.stories';

describe('Popup Header Tests', () => {

    const args = Default.args;

    const element = render(<PopupHeader {...args}/>);

    it('tests render', () => {
        expect(element).toBeDefined();
    });

});