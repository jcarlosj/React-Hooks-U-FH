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

} );