import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

/** Components */
import { MultipleCustomHooksApp } from '../../components/MultipleCustomHooksApp';

/** Hooks */
import { useFetch } from '../../hooks/useFetch';
// import { useCounter } from '../../hooks/useCounter';

jest.mock( '../../hooks/useFetch' );    //  Simula funcion (el Hook useFetch)
// jest.mock( '../../hooks/useCounter' );    //  Simula funcion (el Hook useCounter)

//  TO DO: TypeError: Cannot destructure property 'state' of '(0 , _useCounter.useCounter)(...)' as it is undefined.

describe( '<MultipleCustomHooksApp />', () => {

    /** Simula valores esperados del Hook */
    // useCounter.mockReturnValue({      
    //     state: 9,
    //     increment: () => {}
    // });
    

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