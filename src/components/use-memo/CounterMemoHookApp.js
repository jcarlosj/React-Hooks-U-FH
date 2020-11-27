import React, { useState } from 'react';

/** Custom Hooks */
import { useCounter } from '../../hooks/useCounter';

import './counter-use-memo-app.css';

/** Functional Component */
export const CounterMemoHookApp = () => {

    const
        factor = 1, 
        { state:counter, increment } = useCounter( 7000 ),
        [ state, setState ] = useState( true );

    const procesoPesado = ( iteraciones ) => {

        for( let i = 0; i < iteraciones; i ++ ) {
            console.log( `Iterando...` );
        }

        return iteraciones;
    }

    return (
        <section className="container mt-5">
            <h1>Counter: { counter }</h1>
            <p>Usando un Hook useMemo</p>
            <p><em><strong>{ procesoPesado( counter ) }</strong> iteraciones realizadas</em> que se repetiran ante cualquier interaccion que cambie el estado del componente</p>
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
