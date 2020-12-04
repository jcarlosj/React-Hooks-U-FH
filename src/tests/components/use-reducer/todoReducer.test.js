import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import { shallow } from 'enzyme';

/** Reducer */
import { todoReducer } from '../../../components/use-reducer/todoReducer';

const 
    demoDataTodos = [
        { id: 1,  description: 'Aprender Vue', done: 'false' },
        { id: 2,  description: 'Aprender Angular', done: 'false' },
        { id: 3,  description: 'Aprender Jest', done: 'false' }
    ],
    action = {};

describe( 'todoReducer Reducer', () => {

    test( 'debe retornar state por defecto', () => {

        const state = todoReducer( demoDataTodos, action );

        expect( state ).toEqual( demoDataTodos );

    } );

} );