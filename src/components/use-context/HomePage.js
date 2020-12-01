import React, { useContext } from 'react';

/** Context */
import { UserContext } from './UserContext';

/** Functional Component */
export const HomePage = () => {

    const 
        userContext = useContext( UserContext ),      //  Obtenemos valores del Context
        { user } = userContext;

    console.log( 'userContext', userContext );

    return (
        <section className="container mt-5">
            <h1>Home Page</h1>
            <hr />
            <pre>{ JSON.stringify( user, null, 4 ) }</pre>
        </section>
    )
}
