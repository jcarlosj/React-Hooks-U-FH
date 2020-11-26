import React from 'react';

/** Hooks */
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

/** Functional Component */
export const RealExampleUseLayoutEffectApp = () => {

    const 
        { state:counter, increment } = useCounter( 1 ),
        { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` ),
        { author, quote } = !!data && data[ 0 ];    //  !!null -> Convertir un null en false

    console.log( counter , ' - ' , quote, '(', author, ')' );
    // console.log( Object.keys( state ) );

    return (
        <section className="container mt-5">
            <h1>Breaking Bad Quotes</h1>  
            <p>Custom Hooks</p>  
            <hr /> 
    
            <blockquote className="blockquote text-right">
                <p className="mb-0">{ quote }</p>
                <footer className="blockquote-footer">{ author }</footer>
            </blockquote>

            <button
                className="btn btn-primary"
                onClick={ () => increment() }
            >Next Quote</button>
            
        </section>
    )
}
