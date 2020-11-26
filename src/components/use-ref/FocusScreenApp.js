import React, { useRef } from 'react';

export const FocusScreenApp = () => {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();     //  document.querySelector( 'input' ).focus();
        console.log( inputRef );
    }

    return (
        <section className="container mt-5">
            <h1>Focus Screen</h1>  
            <hr /> 

            <div className="form-group">
                <input 
                    className="form-control"
                    placeholder="Tu nombre"
                    ref={ inputRef }
                />
            </div>

            <div className="form-group">
                <button 
                    className="btn btn-outline-primary"
                    onClick={ handleClick }
                >Focus</button>
            </div>
        </section>
    )
}
