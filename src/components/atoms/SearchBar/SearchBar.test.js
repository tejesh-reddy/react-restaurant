import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from '.';
import { Default } from './SearchBar.stories';

describe('Search Tests', () => {

    const args = Default.args;

    it('tests render', () => {
        const element = render(<SearchBar {...args}/>);
        expect(element).toBeDefined();
    });

    it('test button click', () => {
        const element = render(<SearchBar {...args}/>);
        const searched = fireEvent.change(screen.getByPlaceholderText('Search'));
        expect(searched).toBe(true);
    })

});