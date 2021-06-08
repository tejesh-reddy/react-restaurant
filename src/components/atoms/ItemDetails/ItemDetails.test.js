import { render } from '@testing-library/react';
import { ItemDetails } from '.';
import { Default } from './ItemDetails.stories';

describe('Item Details Test', () => {

    const args = Default.args;

    it('test render', () => {
        const element = render(<ItemDetails {...args}/>);
        expect(element).toBeDefined();
    })
});