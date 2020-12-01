import React, { useContext } from 'react';

/** Context */
import { UserContext } from './UserContext';

/** Functional Component */
export const AboutPage = () => {

    const 
        userContext = useContext( UserContext ),      //  Obtenemos valores del Context
        { user, setUser } = userContext;

    console.log( 'userContext', userContext );

    return (
        <section className="container mt-5">
            <h1>About Page</h1>
            {   user.name && <p>Hola, { user.name }.</p> }
            <hr />
            <pre>{ JSON.stringify( user, null, 4 ) }</pre>
            <button
                className="btn btn-warning"
                onClick={ () => setUser( {} ) }
            >
                Logout
            </button>
        </section>
    )
}