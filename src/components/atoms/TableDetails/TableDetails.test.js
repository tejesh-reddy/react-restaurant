import { render, screen } from '@testing-library/react';
import { TableDetails } from '.';
import { Default } from './TableDetails.stories.js';

describe('Table Details Tests', () => {

    const args = Default.args;

    const element = render(<TableDetails {...args}/>);

    it('tests render', () => {
        expect(element).toBeDefined();
    });

});