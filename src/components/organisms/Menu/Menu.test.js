import { render, screen } from '@testing-library/react';
import { Menu } from '.';
import { Default } from './Menu.stories';

describe('Menu Tests', () => {

    const args = Default.args;

    const element = render(<Menu {...args}/>);

    it('tests render', () => {
        expect(element).toBeDefined();
    });

});