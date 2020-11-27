import React from 'react';

export const CounterSample = ({ value }) => {

    console.log( 'CounterSample se renderiza' );

    return (
        <span>(<small> { value } </small>)</span>
    )
}
