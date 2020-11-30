import React, { useReducer } from 'react';

/** Reducer */
import { todoReducer } from './todoReducer';

import './todo-app.css';


/** Estado Inicial */
const initialState = [{
    id: new Date().getTime(),
    description: 'Aprender Angular',
    done: false
}];

/** Functional Component */
export const TodoApp = () => {

    const [ todos ] = useReducer( todoReducer, initialState );

    console.log( todos );

    return (
        <section className="container mt-5">
            <h1>To Do ( { todos.length } ) </h1>  
            <p>Usando el Hook useReducer</p>  
            <hr /> 

            <ul class="list-group list-group-flush">
               {    todos.map( todo => (
                        <li 
                            key={ todo.id }
                            className="list-group-item"
                        >{ todo.description }</li>
                    ))
               }
            </ul>

        </section>
    )
}
