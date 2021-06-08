import { render, screen } from '@testing-library/react';
import { MainPage } from '.';
import { Default } from './MainPage.stories';

describe('Main Page Tests', () => {

    const args = Default.args;

    const element = render(<MainPage {...args}/>);

    it('tests render', () => {
        expect(element).toBeDefined();
    });

});