import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

/** Component */
import { TodoItem } from '../../../components/use-reducer/TodoItem';

/** Fixtures (Datos fijos de prueba) */
import { demoDataTodos } from '../../fixtures/demoTodos';

describe( '<TodoItem />', () => {

    const
        index = 1,
        handleToggle = jest.fn(),
        handleDelete = jest.fn(), 
        wrapper = shallow( 
            <TodoItem 
                key={ demoDataTodos[ index ].id }
                idx={ index } 
                todo={ demoDataTodos[ index ] }
                handleToggle={ handleToggle }
                handleDelete={ handleDelete }
            />
        );

    test( 'debe desplegar correctamente', () => {

        // console.log( wrapper.html() );
        expect( wrapper ).toMatchSnapshot();
        
    } );

    test( 'debe invocar la funcion handleToggle', () => {

        wrapper.find( 'p' ).simulate( 'click' );
        expect( handleToggle ).toHaveBeenCalledWith( demoDataTodos[ index ].id );
        
    } );

    test( 'debe invocar la funcion handleDelete', () => {

        wrapper.find( 'button' ).simulate( 'click' );
        expect( handleDelete ).toHaveBeenCalledWith( demoDataTodos[ index ].id );
        
    } );

    test( 'debe mostrar la descripcion del TODO correctamente', () => {

        // console.log( wrapper.find( 'p.task-description' ).text() );      
        expect( wrapper.find( 'p.task-description' ).text().trim() ).toBe( `${ index + 1 }. ${ demoDataTodos[ index ].description }` );     //  2. Aprender Angular
        
    } );

} );