import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import { shallow } from 'enzyme';

import { useForm } from '../../hooks/useForm';

describe( 'useForm Custom Hook', () => {

    const initialForm = {
        name: 'Ana',
        email: 'ana@correo.co'
    };

    test( 'debe retornar 1 object y 2 funciones por defecto', () => {

        const { result } = renderHook( () => useForm() );        //  renderHook(): Renderiza el Hook (debemos pasar el Hook como el retorno de una funcion)

        // console.log( result.current );
        expect( typeof result.current[ 0 ] ).toBe( 'object' );
        expect( typeof result.current[ 1 ] ).toBe( 'function' );
        expect( typeof result.current[ 2 ] ).toBe( 'function' );

    } );

} );