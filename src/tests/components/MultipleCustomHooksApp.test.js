import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

/** Components */
import { MultipleCustomHooksApp } from '../../components/MultipleCustomHooksApp';

/** Hooks */
import { useFetch } from '../../hooks/useFetch';
jest.mock( '../../hooks/useFetch' );    //  Simula funcion (el Hook useFetch)

describe( '<MultipleCustomHooksApp />', () => {

    test( 'debe desplegar correctamente', () => {

        /** Simula valores esperados del Hook */
        useFetch.mockReturnValue({      
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow( 
            <MultipleCustomHooksApp /> 
        );

        expect( wrapper ).toMatchSnapshot();

    } );

    test( 'debe mostrar datos de la peticion - useFetch Custom Hook', () => {

        /** Simula valores esperados del Hook */
        useFetch.mockReturnValue({      
            data: [{
                author: 'Janeth Eva Sofia',
                quote: 'Se va a desnarizorejar!'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow( 
            <MultipleCustomHooksApp /> 
        );

        // console.log( wrapper.html() );
        expect( wrapper.find( '.alert' ).exists() ).toBe( false );                              //  No deberia existir si hay data
        expect( wrapper.find( '.quote' ).text().trim() ).toBe( 'Se va a desnarizorejar!' );     //  Texto del a cita
        expect( wrapper.find( 'footer' ).text().trim() ).toBe( 'Janeth Eva Sofia' );            //  Author de la cita

    } );

} );