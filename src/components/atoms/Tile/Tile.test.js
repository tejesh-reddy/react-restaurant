import { render, screen } from '@testing-library/react';
import { Tile } from '.';
import { Default } from './Tile.stories.js';

describe('Table Details Tests', () => {

    const args = Default.args;

    const element = render(<Tile {...args}/>);

    it('tests render', () => {
        expect(element).toBeDefined();
    });

});