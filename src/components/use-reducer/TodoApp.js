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

            <div className="row">
                <div className="col-5">

                    <form>

                        <input 
                            type="text"
                            name="description"
                            placeholder="Descripción Tarea"
                            autoComplete="off"
                            className="form-control"
                        />
                        <button 
                            type="button"
                            className="btn btn-outline-primary btn-block mt-2 mb-2"
                        >
                            Agregar
                        </button>

                    </form>

                </div>
                <div className="col-7">

                    { todos.length > 0 && (
                        <>
                            <h3>Lista de tareas</h3>
                            <hr />
                        </>
                    )}

                    <ul class="list-group list-group-flush">
                        {    todos.map( ( todo, idx ) => (
                                    <li 
                                        key={ todo.id }
                                        className="list-group-item d-inline-flex align-items-center"
                                    >
                                        <p className="task-description">{ idx + 1 }. { todo.description }</p>
                                        <button className="btn btn-danger">Borrar</button>
                                    </li>
                                ))
                        }
                    </ul>

                </div>
            </div>

        </section>
    )
}
