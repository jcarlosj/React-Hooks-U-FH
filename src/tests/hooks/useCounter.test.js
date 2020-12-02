import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import { shallow } from 'enzyme';

import { useCounter } from '../../hooks/useCounter';

describe( 'useCounter Custom Hook', () => {

    test( 'debe retornar 1 valor (10) y 3 funciones por defecto', () => {

        const { result } = renderHook( () => useCounter() );        //  renderHook(): Renderiza el Hook (debemos pasar el Hook como el retorno de una funcion)

        // console.log( result.current );
        expect( result.current.state ).toBe( 10 );
        expect( typeof result.current.increment ).toBe( 'function' );
        expect( typeof result.current.decrement ).toBe( 'function' );
        expect( typeof result.current.reset ).toBe( 'function' );

    } );

    test( 'debe retornar valor por defecto pasado como argumento', () => {

        const
            arg = 99, 
            { result } = renderHook( () => useCounter( arg ) );        //  renderHook(): Renderiza el Hook (debemos pasar el Hook como el retorno de una funcion)

        // console.log( result.current );
        expect( result.current.state ).toBe( arg );

    } );

    test( 'debe incrementar state en 1', () => {

        const
            arg = 99, 
            { result } = renderHook( () => useCounter( arg ) ),        //  renderHook(): Renderiza el Hook (debemos pasar el Hook como el retorno de una funcion)
            { increment } = result.current;                            //  Destructuracion

        act( () => {        //      Simula la accion de nuestro Hook permitiendonos actualizar valores dentro de él.
            increment();
        });

        const { state } = result.current;

        // console.log( state, arg + 1 );
        expect( state ).toBe( arg + 1 );

    } );

} );