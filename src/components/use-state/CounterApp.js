import React from 'react';

import './counter-app.css';

export const CounterApp = () => {
    return (
        <section className="container mt-5">
            <h1>Counter { 0 }</h1>
            <hr />
            <button className="btn btn-primary">+1</button>   
        </section>
    )
}
