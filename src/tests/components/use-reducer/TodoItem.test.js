import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

/** Component */
import { TodoItem } from '../../../components/use-reducer/TodoItem';

/** Fixtures (Datos fijos de prueba) */
import { demoDataTodos } from '../../fixtures/demoTodos';

describe( '<TodoItem />', () => {

    const wrapper = shallow( 
        <TodoItem 
            key={ demoDataTodos[ 1 ].id }
            idx={ 1 } 
            todo={ demoDataTodos[ 1 ] }
            handleToggle={ () => {} }
            handleDelete={ () => {} }
        />
    );

    test( 'debe desplegar correctamente', () => {

        // console.log( wrapper.html() );
        expect( wrapper ).toMatchSnapshot();
        
    } );

} );