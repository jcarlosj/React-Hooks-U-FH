import React from 'react';

/** Hooks */
import { useFetch } from '../hooks/useFetch';

/** Functional Component */
export const MultipleCustomHooksApp = () => {

    const 
        { loading, data } = useFetch( `https://www.breakingbadapi.com/api/quotes/1` ),
        { author, quote } = !!data && data[ 0 ];    //  !!null -> Convertir un null en false

    console.log( quote, '(', author, ')' );

    return (
        <section className="container mt-5">
            <h1>Breaking Bad Quotes</h1>  
            <p>Custom Hooks</p>  
            <hr /> 
    
            {   loading  
                    ?   <p className="alert alert-info text-center">Loading...</p> 
                    :   <blockquote className="blockquote text-right">
                            <p className="mb-0">{ quote }</p>
                            <footer className="blockquote-footer">{ author }</footer>
                        </blockquote>
            }
            
        </section>
    )
}
