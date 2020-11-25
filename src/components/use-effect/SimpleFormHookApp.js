import React, { useState } from 'react';

import './use-effects.css';

/** Funcional Component */
export const SimpleFormHookApp = () => {

    const 
        [ formState, setFormState] = useState( {
            name: '',
            email: '',
            password: ''
        } ),
        { name, email, password } = formState;

    const handleInputChange = ({ target }) => {
        console.log( '>', target.name, target.value );

        setFormState({      //  Actualiza State
            ...formState,
            [ target.name ]: target.value
        });
    }

    return (
        <section className="container mt-5">
            <h1>useEffect</h1> 
            <p>Usando un Hook personalizado</p>
            <hr />  

            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Escribe 'sofia'"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }  
                />
            </div>

            <div className="form-group">
                <input 
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Tu email"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }  
                />
            </div>

            <div className="form-group">
                <input 
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="******"
                    value={ password }
                    onChange={ handleInputChange }  
                />
            </div>

        </section>
    )
}
