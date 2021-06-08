import { render, screen } from '@testing-library/react';
import { Tables } from '.';
import { Default } from './Tables.stories';

describe('Tables Tests', () => {

    const args = Default.args;

    const element = render(<Tables {...args}/>);

    it('tests render', () => {
        expect(element).toBeDefined();
    });

});