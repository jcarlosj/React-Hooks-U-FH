import React, { memo } from 'react';

export const CounterSample = memo( ({ value }) => {

    console.log( 'CounterSample se renderiza' );

    return (
        <span>(<small> { value } </small>)</span>
    )
});
