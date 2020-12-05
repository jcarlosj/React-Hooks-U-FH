import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { TodoApp } from '../../../components/use-reducer/TodoApp';

describe( '<TodoApp />', () => {

    const wrapper = shallow( <TodoApp /> );

    test( 'debe desplegar correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    } );

} );