import React, { useState } from 'react';

/** Components */
import { CounterSample } from './CounterSample';

/** Custom Hooks */
import { useCounter } from '../../hooks/useCounter';

import './counter-memorize-app.css';

/** Functional Component */
export const CounterMemorizeApp = () => {

    const
        factor = 1, 
        { state:counter, increment } = useCounter( 1 ),
        [ state, setState ] = useState( true );

    return (
        <section className="container mt-5">
            <h1>Counter <CounterSample value={ counter } /> </h1>
            <p>La acción del botón renderiza el componente segundario (ver: consola del navegador)</p>
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
