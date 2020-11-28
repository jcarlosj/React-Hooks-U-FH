import React from 'react';

export const IncreaseButton = ({ increment }) => {

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
}
