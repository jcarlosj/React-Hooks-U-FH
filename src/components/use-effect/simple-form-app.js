import React, { useState } from 'react';

import './use-effects.css';

export const SimpleFormApp = () => {

    const 
        [ formState, setFormState] = useState( {
            name: '',
            email: ''
        } ),
        { name, email } = formState;

    const handleInputChange = event => {
        console.log( event.target.name, event.target.value );
    }

    return (
        <section className="container mt-5">
            <h1>useEffect</h1> 
            <hr />  

            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }  
                />
            </div>
        </section>
    )
}
