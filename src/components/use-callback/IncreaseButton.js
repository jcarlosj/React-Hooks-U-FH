import React, { memo } from 'react';

export const IncreaseButton = memo( ({ increment }) => {

    console.log( 'IncreaseButton se renderiza' );

    return (
        <button
            className="btn btn-primary"
            onClick={ () => {
                increment();
            } }
        >
            Increment
        </button>
    )
});
