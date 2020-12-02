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

    test( 'debe retornar objecto con data obtenida de la peticion', async () => {

        const 
            url = `https://www.breakingbadapi.com/api/quotes/1`,
            { result, waitForNextUpdate } = renderHook( () => useFetch( url ) );       //  Peticion Sincrona
            
        await waitForNextUpdate();      //  Espera que se resuelva la peticion

        const { data, loading, error } = result.current;              //  Valores iniciales

        // console.log( result.current );
        expect( data.length ).toBe( 1 );
        expect( loading ).toBe( false );
        expect( error ).toBe( null );

    } );

    test( 'debe manejar error al no obtener la data de la peticion', async () => {

        const 
            url = `https://reqres.in/aphi/users?page=2`,
            { result, waitForNextUpdate } = renderHook( () => useFetch( url ) );       //  Peticion Sincrona
            
        await waitForNextUpdate();      //  Espera que se resuelva la peticion

        const { data, loading, error } = result.current;              //  Valores iniciales

        // console.log( result.current );
        expect( data ).toBe( null );
        expect( loading ).toBe( false );
        expect( error ).toBe( 'No se pudo obtener la data' );

    } );

} );