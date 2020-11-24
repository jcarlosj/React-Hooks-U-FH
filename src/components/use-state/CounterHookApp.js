import React from 'react';

/** Custom Hooks */
import { useCounter } from '../../hooks/useCounter';

import './counter-app.css';

export const CounterHookApp = () => {

    const
        factor = 3, 
        { state:counter, increment, decrement, reset } = useCounter( 9 );

    return (
        <section className="container mt-5">
            <h1>Counter: { counter }</h1>
            <p>Usando un Hook personalizado</p>
            <hr />
            <button 
                className="btn btn-primary m-1"
                onClick={ () => increment( factor ) }
            >+{ factor }</button>   
            <button 
                className="btn btn-primary m-1"
                onClick={ reset }
            >Reset</button>   
            <button 
                className="btn btn-primary m-1"
                onClick={ () => decrement( factor ) }
            >-{ factor }</button>  
        </section>
    )
}
