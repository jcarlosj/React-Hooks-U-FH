import React from 'react';

/** Custom Hooks */
import { useCounter } from '../../hooks/useCounter';

import './counter-memorize-app.css';

export const CounterMemorizeApp = () => {

    const
        factor = 1, 
        { state:counter, increment } = useCounter( 1 );

    return (
        <section className="container mt-5">
            <h1>Counter: { counter }</h1>
            <p>Usando un Hook personalizado</p>
            <hr />
            <button 
                className="btn btn-primary m-1"
                onClick={ () => increment( factor ) }
            >+{ factor }</button>   
        </section>
    )
}
