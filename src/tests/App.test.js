import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { App } from '../App';

describe( '<App />', () => {

    test( 'debe desplegar correctamente', () => {
        
        const wrapper = shallow( 
            <App /> 
        );
        expect( wrapper ).toMatchSnapshot();

    });

    test( 'debe desplegar titulo "Hooks App"', () => {
        
        const 
            wrapper = shallow( 
                <App /> 
            ),
            titleText = wrapper.find( 'h1' ).text();

        // console.log( titleText );
        expect( titleText ).toBe( 'Hooks App' );

    });

} );