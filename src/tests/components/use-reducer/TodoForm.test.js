import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { TodoForm } from '../../../components/use-reducer/TodoForm';

describe( '<TodoForm />', () => {

    const
        handleAddTodo = jest.fn(), 
        wrapper = shallow(
            <TodoForm handleAddTodo={ handleAddTodo } />
        );

    test( 'debe desplegar correctamente', () => {

        // console.log( wrapper.html() );
        expect( wrapper ).toMatchSnapshot();

    } );

} );