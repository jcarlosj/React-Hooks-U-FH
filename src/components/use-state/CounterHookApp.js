import React from 'react';

import './counter-app.css';

export const CounterHookApp = () => {

    return (
        <section className="container mt-5">
            <h1>Counter: { 0 }</h1>
            <p>Usando un Hook personalizado</p>
            <hr />
            <button 
                className="btn btn-primary m-1"
                onClick={ () => {
                    
                } }
            >+1</button>   
            <button 
                className="btn btn-primary m-1"
                onClick={ () => {
                    
                } }
            >-1</button>  
        </section>
    )
}
