import React from 'react';

export const FocusScreenApp = () => {

    const handleClick = () => {
        document.querySelector( 'input' ).select();     //  document.querySelector( 'input' ).focus();
    }

    return (
        <section className="container mt-5">
            <h1>Focus Screen</h1>  
            <hr /> 

            <div className="form-group">
                <input 
                    className="form-control"
                    placeholder="Tu nombre"
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
