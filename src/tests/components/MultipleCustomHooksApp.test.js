import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { MultipleCustomHooksApp } from '../../components/MultipleCustomHooksApp';

describe( '<MultipleCustomHooksApp />', () => {

    test( 'debe desplegar correctamente', () => {

        const wrapper = shallow( 
            <MultipleCustomHooksApp /> 
        );
        
        expect( wrapper ).toMatchSnapshot();

    } );

} );