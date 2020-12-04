import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import { shallow } from 'enzyme';

/** Reducer */
import { todoReducer } from '../../../components/use-reducer/todoReducer';

/** Fixtures (Datos fijos de prueba) */
import { demoDataTodos, action } from '../../fixtures/demoTodos';

describe( 'todoReducer Reducer', () => {

    test( 'debe retornar state por defecto', () => {

        const state = todoReducer( demoDataTodos, action );

        expect( state ).toEqual( demoDataTodos );

    } );

    test( 'debe agregar un TODO al state', () => {

        const
            newTodo = {
                id: demoDataTodos.length + 1,
                description: 'Aprender Python',
                done: false
            },
            action = { 
                type: 'ADD', 
                payload: newTodo 
            }, 
            state = todoReducer( demoDataTodos, action );

            // console.log( state );
            expect( state.length ).toBe( demoDataTodos.length + 1 );
            expect( state ).toEqual( [ ...demoDataTodos, newTodo ] );

    } );

    test( 'debe eliminar un TODO al state', () => {

        const
            id = 2,
            action = { 
                type: 'DELETE', 
                payload: id 
            }, 
            state = todoReducer( demoDataTodos, action );

            // console.log( state );
            expect( state.length ).toBe( demoDataTodos.length - 1 );
            expect( state ).toEqual( demoDataTodos.filter( todo => todo.id !== id ) );

    } );

    test( 'debe cambiar estado de finalizacion de un TODO', () => {

        const
            id = 2,         //  Aprender Angular
            action = { 
                type: 'TOGGLE', 
                payload: id 
            }, 
            state = todoReducer( demoDataTodos, action );

        // console.log( state[ 2 ].done );     //  Aprender Angular
        expect( state[ 1 ].done ).toBe( true );
        expect( state[ 2 ] ).toEqual( demoDataTodos[ 2 ] );     //  Aprender Jest

    } );

} );