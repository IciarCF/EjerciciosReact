import { describe, expect, test } from "vitest"
import { MyAwesomeApp } from "./MyAwesomeApp"
import { render, screen } from '@testing-library/react';

describe('MyAwesomeApp', () => {
    test('should render firstName and lastName', () => {
        const {container} = render (<MyAwesomeApp/>);
        screen.debug();

        const h1 = container.querySelector('h1');
        const h2 = container.querySelector('h2');
        
        expect(h1?.innerHTML).toContain('Iciar');
        expect(h2?.innerHTML).toContain('Cabezuelo');
        
    });

    test('should render firstName and lastName - screen', () => {
        render (<MyAwesomeApp/>);
        screen.debug();

        const h1 = screen.getByTestId('first-name-title');

        console.log(h1.innerHTML);
        expect(h1.innerHTML).toContain('Iciar');
        
    });
    
    test('should match snapshot', () => {
        const {container} = render(<MyAwesomeApp/>);
        expect(container).toMatchSnapshot();
    })

    test('should match snapshot - screen', () => {
        render(<MyAwesomeApp/>);
        expect(screen.getByTestId('div-app')).toMatchSnapshot();
    })

})