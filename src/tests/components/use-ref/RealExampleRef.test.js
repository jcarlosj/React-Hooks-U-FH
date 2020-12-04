import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { RealExampleRef } from '../../../components/use-ref/RealExampleRef';

describe( '<RealExampleRef />', () => {

    test( 'debe desplegar correctamente', () => {

        const wrapper = shallow( <RealExampleRef /> );

        expect( wrapper ).toMatchSnapshot();

    } );
    
} );