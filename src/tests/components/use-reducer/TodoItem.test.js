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

} );