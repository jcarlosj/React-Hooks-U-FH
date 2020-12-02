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

    test( 'debe cambiar valor del campo "name" del formulario', () => {

        const 
            { result } = renderHook( () => useForm( initialForm ) ),        //  renderHook(): Renderiza el Hook (debemos pasar el Hook como el retorno de una funcion)
            [ , handleInputChange ] = result.current;

        // console.log( result.current );
    
        act( () => {    //  Simula la accion de nuestro Hook permitiendonos actualizar valores dentro de él.
            handleInputChange({
                target: {           //  Simula evento usado por handleInputChange con sus propiedades
                    name: 'name',
                    value: 'Melissa'
                }
            });
        });

        const [ formValues ] = result.current;
        
        // console.log( formValues );
        expect( formValues ).toEqual({
            ...initialForm,
            name: 'Melissa'
        });

    } );

    test( 'debe re-establecer los valores iniciales del formulario', () => {

        const 
            { result } = renderHook( () => useForm( initialForm ) ),        //  renderHook(): Renderiza el Hook (debemos pasar el Hook como el retorno de una funcion)
            [ , handleInputChange, reset ] = result.current;

        // console.log( result.current );
    
        act( () => {    //  Simula la accion de nuestro Hook permitiendonos actualizar valores dentro de él.
            handleInputChange({
                target: {           //  Simula evento usado por handleInputChange con sus propiedades
                    name: 'name',
                    value: 'Melissa'
                }
            });

            reset();

        });

        const [ formValues ] = result.current;
        
        // console.log( formValues );
        expect( formValues ).toEqual( initialForm );

    } );

} );