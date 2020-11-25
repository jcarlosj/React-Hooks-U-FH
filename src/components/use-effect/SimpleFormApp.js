import React, { useEffect, useState } from 'react';

import './use-effects.css';

export const SimpleFormApp = () => {

    const 
        [ formState, setFormState] = useState( {
            name: '',
            email: ''
        } ),
        { name, email } = formState;

    // useEffect( () => {       //  Cargará todo el tiempo
    //     console.log( 'SimpleForm! cargó' );
    // });

    useEffect( () => {          //  Cargará una sola vez
        console.log( 'SimpleForm! cargó' );
    }, [] );

    useEffect( () => {          //  Cargará cuando haya cambios en formState
        console.log( 'stateForm cambió' );
    }, [ formState ] );

    useEffect( () => {          //  Cargará cuando haya cambios en email
        console.log( 'email cambió' );
    }, [ email ] );

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

        </section>
    )
}
