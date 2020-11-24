import React, { useState } from 'react';

import './counter-app.css';

export const CounterApp = () => {

    const 
        [ counter, setCounter ] = useState({
            counterOne: 10,
            counterTwo: 20
        }),
        { counterOne, counterTwo } = counter;

    return (
        <section className="container mt-5">
            <h1>Counter 1: { counterOne }</h1>
            <h1>Counter 2: { counterTwo }</h1>
            <hr />
            <button 
                className="btn btn-primary"
                onClick={ () => {
                    setCounter({
                        ...counter,
                        counterOne: counterOne + 1
                    });
                } }
            >+1</button>   
        </section>
    )
}
