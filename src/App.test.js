import { render, screen } from '@testing-library/react';
import App from './App';

describe('Popup Header Tests', () => {

    const args = {

    };

    it('tests render', () => {
        const element = render(<App {...args}/>);
    
        expect(element).toBeDefined();
    });

    it('tests mainpage', () => {
        const element = render(<App {...args}/>);
        
        expect(screen.getByText('Menu')).not.toBeNull();

    })

});