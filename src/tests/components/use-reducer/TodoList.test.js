import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

/** Component */
import { TodoList } from '../../../components/use-reducer/TodoList';

/** Fixtures (Datos fijos de prueba) */
import { demoDataTodos } from '../../fixtures/demoTodos';

describe( '<TodoList />', () => {

    const 
        handleToggle = jest.fn(),
        handleDelete = jest.fn(),
        wrapper = shallow(
            <TodoList 
                todos={ demoDataTodos } 
                handleToggle={ handleToggle }
                handleDelete={ handleDelete }
            />
        );

    test( 'debe desplegar correctamente', () => {

        // console.log( wrapper.html() );
        expect( wrapper ).toMatchSnapshot();

    } );

    test( 'debe desplegar la cantidad esperada de <TodoItem />', () => {

        // console.log( wrapper.debug() );
        expect( wrapper.find( 'TodoItem' ).length ).toBe( demoDataTodos.length );

    } );

    test( 'debe tener todas las propiedades que se pasan a <TodoItem />', () => {

        const $TodoItem = wrapper.find( 'TodoItem' ).at( 0 );       //  Obtiene el primer elemento del TodoItem

        // console.log( wrapper.find( 'TodoItem' ).at( 0 ).props() );
        // console.log( wrapper.find( 'TodoItem' ).at( 0 ).prop( 'todo' ) );
        expect( $TodoItem.prop( 'todo' ) ).toEqual( expect.any( Object ) );
        expect( $TodoItem.prop( 'handleToggle' ) ).toEqual( expect.any( Function ) );
        expect( $TodoItem.prop( 'handleDelete' ) ).toEqual( expect.any( Function ) );

    } );

} );