import React from 'react';

/** Hooks */
import { useFetch } from '../hooks/useFetch';

/** Functional Component */
export const MultipleCustomHooksApp = () => {

    const state = useFetch( `https://www.breakingbadapi.com/api/quotes/1` );

    console.log( state );

    return (
        <section className="container mt-5">
            <h1>Custom Hooks</h1>  
            <hr /> 
        </section>
    )
}
