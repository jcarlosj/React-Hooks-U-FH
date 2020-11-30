import React from 'react';

import './todo-app.css';

/** Functional Component */
export const TodoApp = () => {
    return (
        <section className="container mt-5">
            <h1>To Do</h1>  
            <p>Usando el Hook useReducer</p>  
            <hr /> 

            <ul>
                <li>Aprender Angular</li>
                <li>Aprender Vue</li>
                <li>Aprender Deno</li>
            </ul>

        </section>
    )
}
