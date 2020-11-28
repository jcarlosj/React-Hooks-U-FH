import React, { useCallback } from 'react';
import { Hijo } from './Hijo';
import { useState } from 'react';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [ valor, setValor ] = useState( 0 );

    /** Memoriza la funcion */
    const incrementar = useCallback( ( theNumber ) => {
            setValor( v => v + theNumber );
        }, [ setValor ] );

    return (
        <section className="container mt-5">
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </section>
    )
}
