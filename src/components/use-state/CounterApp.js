import React, { useState } from 'react';

import './counter-app.css';

export const CounterApp = ({ initialValue = 10 }) => {

    const [ counter, setCounter ] = useState( initialValue );

    return (
        <section className="container mt-5">
            <h1>Counter { counter }</h1>
            <hr />
            <button 
                className="btn btn-primary"
                onClick={ () => {
                    setCounter( counter + 1 );
                } }
            >+1</button>   
        </section>
    )
}
