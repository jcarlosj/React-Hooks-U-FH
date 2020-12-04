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

} );