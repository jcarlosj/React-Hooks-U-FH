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

        const 
            { result } = renderHook( () => useForm( initialForm ) ),        //  renderHook(): Renderiza el Hook (debemos pasar el Hook como el retorno de una funcion)
            [ formValues, handleInputChange, reset ] = result.current;

        // console.log( result.current );
        expect( typeof formValues ).toBe( 'object' );
        expect( formValues ).toEqual( initialForm );
        expect( typeof handleInputChange ).toBe( 'function' );
        expect( typeof reset ).toBe( 'function' );

    } );

} );