import React from 'react';

/** Custom Hooks */
import { useCounter } from '../../hooks/useCounter';

import './counter-app.css';

export const CounterHookApp = () => {

    const { state:counter, increment, decrement } = useCounter( 9 );

    return (
        <section className="container mt-5">
            <h1>Counter: { counter }</h1>
            <p>Usando un Hook personalizado</p>
            <hr />
            <button 
                className="btn btn-primary m-1"
                onClick={ increment }
            >+1</button>   
            <button 
                className="btn btn-primary m-1"
                onClick={ decrement }
            >-1</button>  
        </section>
    )
}
