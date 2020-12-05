import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

/** Component */
import { TodoApp } from '../../../components/use-reducer/TodoApp';

/** Fixtures (Datos fijos de prueba) */
import { demoDataTodos } from '../../fixtures/demoTodos';

describe( '<TodoApp />', () => {

    const wrapper = shallow( <TodoApp /> );     //  shallow: Renderizado superficial

    Storage.prototype.setItem = jest.fn( () => {} );    

    test( 'debe desplegar correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    } );

    test( 'debe agregar un TODO', async () => {

        const wrapper = shallow( <TodoApp /> );   /*  mount: Renderizado completo incluyendo componentes secundarios. 
                                                   *         Para probar el ciclo de vida de los componentes y el comportamiento de sus componentes hijos
                                                   *         En el momento de esta prueba Enzyme no es compatible con React 17; está utilizando el adaptador React 16, y eso requiere reaccionar 16.
                                                   *  error: TypeError: Cannot read property 'child' of undefined
                                                   */

        act( () => {
            wrapper.find( 'TodoForm' ).prop( 'handleAddTodo' ) ( demoDataTodos[ 0 ] );
            wrapper.find( 'TodoForm' ).prop( 'handleAddTodo' ) ( demoDataTodos[ 1 ] );
        });

        // console.log( wrapper.find( 'h1' ).text() );
        expect( wrapper.find( 'h1' ).text().trim() ).toBe( 'To Do ( 2 )' );
        // expect( localStorage.setItem ).toHaveBeenCalledTimes( 2 );      //  Solo puede Asegurar que se ejecutan usando mount quien podrá deducir el comportamento del Componente Hijo

    } );

    test( 'debe eliminar un TODO', () => {

        /** Agrega 2 TODOs */
        wrapper.find( 'TodoForm' ).prop( 'handleAddTodo' ) ( demoDataTodos[ 0 ] );
        wrapper.find( 'TodoForm' ).prop( 'handleAddTodo' ) ( demoDataTodos[ 1 ] );

        expect( wrapper.find( 'h1' ).text().trim() ).toBe( 'To Do ( 2 )' );

        /** Elimina un TODO */
        wrapper.find( 'TodoList' ).prop( 'handleDelete' ) ( demoDataTodos[ 0 ].id );

        expect( wrapper.find( 'h1' ).text().trim() ).toBe( 'To Do ( 1 )' );

    } );


} );