import React, { useState } from 'react';

/** Custom Hooks */
import { useCounter } from '../../hooks/useCounter';

import './counter-use-memo-app.css';

/** Functional Component */
export const CounterMemoHookApp = () => {

    const
        factor = 1, 
        { state:counter, increment } = useCounter( 1 ),
        [ state, setState ] = useState( true );

    return (
        <section className="container mt-5">
            <h1>Counter: { counter }</h1>
            <p>Usando un Hook useMemo</p>
            <hr />
            <button 
                className="btn btn-primary m-1"
                onClick={ () => increment( factor ) }
            >+{ factor }</button> 
            <button 
                className="btn btn-outline-primary m-1"
                onClick={ () => setState( ! state ) }
            >{ JSON.stringify( state ) }</button>   
        </section>
    )
}
