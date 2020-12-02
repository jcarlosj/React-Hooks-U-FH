import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import { shallow } from 'enzyme';

import { useFetch } from '../../hooks/useFetch';

describe( 'useFetch Custom Hook', () => {

    test( 'debe retornar objecto por defecto', () => {

        const 
            url = `https://www.breakingbadapi.com/api/quotes/1`,
            { result } = renderHook( () => useFetch( url ) ),       //  Peticion Sincrona
            { data, loading, error } = result.current;              //  Valores iniciales

        // console.log( result.current );
        expect( data ).toBe( null );
        expect( loading ).toBe( true );
        expect( error ).toBe( null );
        

    } );

} );