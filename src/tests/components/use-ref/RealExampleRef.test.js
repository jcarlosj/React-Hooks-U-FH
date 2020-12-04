import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { RealExampleRef } from '../../../components/use-ref/RealExampleRef';

describe( '<RealExampleRef />', () => {

    const wrapper = shallow( <RealExampleRef /> );

    test( 'debe desplegar correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'MultipleCustomHooksApp' ).exists() ).toBe( false );

    } );

    test( 'debe desplegar el Componente <MultipleCustomHookApp />', () => {

        // console.log( wrapper.find( 'button' ).html() );
        wrapper.find( 'button' ).simulate( 'click' );
        expect( wrapper.find( 'MultipleCustomHooksApp' ).exists() ).toBe( true );

    } );
    
} );