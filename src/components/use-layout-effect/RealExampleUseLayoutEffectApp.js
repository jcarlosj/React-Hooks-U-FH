import React, { useLayoutEffect, useRef, useState } from 'react';

/** Hooks */
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './use-layout-effect.css';

/** Functional Component */
export const RealExampleUseLayoutEffectApp = () => {

    const 
        { state:counter, increment } = useCounter( 1 ),
        { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` ),
        { author, quote } = !!data && data[ 0 ],    //  !!null -> Convertir un null en false
        [ boxSize, setBoxSize ] = useState( {} ),
        $pElRef = useRef();                         //  Crear Referencia

    console.log( counter , ' - ' , quote, '(', author, ')' );
    // console.log( Object.keys( state ) );

    useLayoutEffect( () => {
        console.log( 'El Componente cargó' );
        console.log( $pElRef.current.getBoundingClientRect() );     //  Obtiene las dimensiones del elemento
        setBoxSize( $pElRef.current.getBoundingClientRect() );      //  Actualiza State
    }, [ quote ] );

    return (
        <section className="container mt-5">
            <h1>Breaking Bad Quotes</h1>  
            <p>Usando el Hook useLayoutEffect</p>  
            <hr /> 
    
            <blockquote className="blockquote text-right">
                <p 
                    className="mb-0"
                    ref={ $pElRef }                 //  Referencia al elemento
                >{ quote } </p>
                <footer className="blockquote-footer pl-3"> { author }</footer>
            </blockquote>

            <pre>{ JSON.stringify( boxSize, null, 3 ) }</pre>

            <button
                className="btn btn-primary"
                onClick={ () => increment() }
            >Next Quote</button>
            
        </section>
    )
}
