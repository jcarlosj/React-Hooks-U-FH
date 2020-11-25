import React, { useEffect } from 'react';

/** Hooks */
import { useForm } from '../../hooks/useForm';

import './use-effects.css';

/** Funcional Component */
export const SimpleFormHookApp = () => {

    const 
        [ formValues, handleInputChange ] = useForm( {
            name: '',
            email: '',
            password: ''
        } ),
        { name, email, password } = formValues;

    useEffect(() => {
        console.log( 'Email cambió' );
    }, [ email ]);

    const handleSubmit = event => {
        event.preventDefault();
        console.log( formValues );

    }

    return (
        <section className="container mt-5">
            <h1>useEffect</h1> 
            <p>Usando un Hook personalizado</p>
            <hr />  

            <form
                onSubmit={ handleSubmit }
            >
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

                <div className="form-group">
                    <button 
                        type="submit"
                        className="btn btn-primary"
                    >Guardar</button>
                </div>
            
            </form>

        </section>
    )
}
