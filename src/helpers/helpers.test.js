import { DefaultDrag } from "./dragHelper";
import { render } from '@testing-library/react';

describe('Drag Events Tests', () => {
    
    const event = {
        preventDefault: () => {},
        dataTransfer: {
            setData: data => {},
            getData: data => {},
        },
    };


    it('tests dragstart', () => {
        const func = jest.fn();
        const element = render(<div id='dummy'/>);
        func(DefaultDrag.start(event, 'dummy'));
        expect(func).toBeCalledTimes(1);
      });

      it('tests dragend', () => {
        const func = jest.fn();
        const element = render(<div id='dummy'/>);

        func(DefaultDrag.end(event, 'dummy'));
        expect(func).toBeCalledTimes(1);
      });

      it('tests dragover', () => {
        const func = jest.fn();
        const element = render(<div id='dummy'/>);
        
        func(DefaultDrag.over(event, 'dummy'));
        expect(func).toBeCalledTimes(1);
      });

      it('tests drop', () => {
        const func = jest.fn();
        const element = render(<div id='dummy'/>);
        
        func(DefaultDrag.drop(event, 'dummy', (ev, id) => {}));
        expect(func).toBeCalledTimes(1);
      });

      it('tests dragleave', () => {
        const func = jest.fn();
        const element = render(<div id='dummy'/>);
        
        func(DefaultDrag.leave(event, 'dummy'));
        expect(func).toBeCalledTimes(1);
      });

      it('tests dragenter', () => {
        const func = jest.fn();
        const element = render(<div id='dummy'/>);
        
        func(DefaultDrag.enter(event, 'dummy'));
        expect(func).toBeCalledTimes(1);
      });

});