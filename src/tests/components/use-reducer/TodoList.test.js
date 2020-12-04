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

} );