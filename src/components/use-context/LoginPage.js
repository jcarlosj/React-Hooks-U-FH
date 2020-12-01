import React, { useContext } from 'react';

/** Context */
import { UserContext } from './UserContext'

/** Functional Component */
export const LoginPage = () => {

    const 
        user = { 
            id: new Date().getTime(),
            name: "Eva Sofia", 
            email: "eva.sofia@correo.co" 
        },
        userContext = useContext( UserContext ),
        { setUser } = userContext;

    return (
        <section className="container mt-5">
            <h1>Login Page</h1>
            <hr />
            <p>Informacion del usuario predeterminado que se va a loguear</p>
            <pre>{ JSON.stringify( user, null, 4 ) }</pre>
            <button
                className="btn btn-primary"
                onClick={ () => setUser( user ) }
            >
                Login
            </button>
        </section>
    )
}