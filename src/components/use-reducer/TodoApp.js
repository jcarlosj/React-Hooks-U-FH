import React, { useEffect, useReducer } from 'react';

/** Hooks */
import { useForm } from '../../hooks/useForm';

/** Reducer */
import { todoReducer } from './todoReducer';

import './todo-app.css';

/** Establecera el initialState del Reducer */
const init = () => {
    return JSON.parse( localStorage.getItem( 'todos' ) ) || [];
}

/** Functional Component */
export const TodoApp = () => {

    const 
        [ todos, dispatch ] = useReducer( todoReducer, [], init ),      //  Establece State usando Inicialización diferida del Reducer. permite extraer la lógica para calcular el estado inicial fuera del reductor. También es útil para reiniciar el estado luego en respuesta a una acción. 
        [ formValues, handleInputChange, reset ] = useForm({
            description: ''
        });

    console.log( formValues );

    useEffect(() => {
        localStorage.setItem( 'todos', JSON.stringify( todos ) );   //  Guardar data en el LocalStorage
    }, [ todos ] );

    const handleDelete = id_task => {
        // console.log( id_task );

        const action = {
            type: 'DELETE',
            payload: id_task
        }

        dispatch( action );

    }

    const handleToggle = id_task => {

        dispatch({
            type: 'TOGGLE',
            payload: id_task
        });

    } 

    const handleSubmit = event => {
        event.preventDefault();

        if( formValues.description.trim().length <= 1 ) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            description: formValues.description,
            done: false
        }

        const action = {
            type: 'ADD',
            payload: newTodo
        }

        dispatch( action );
        reset();

    }

    return (
        <section className="container mt-5">

            <h1>To Do ( { todos.length } ) </h1>  
            <p>Usando el Hook useReducer</p>  
            <hr /> 

            <div className="row">
                <div className="col-5">

                    <form
                        onSubmit={ handleSubmit }
                    >

                        <input 
                            type="text"
                            name="description"
                            placeholder="Descripción Tarea"
                            autoComplete="off"
                            className="form-control"
                            value={ formValues.description }
                            onChange={ handleInputChange }
                        />
                        <button 
                            type="submit"
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

                    <ul className="list-group list-group-flush">
                        {    todos.map( ( todo, idx ) => (
                                    <li 
                                        key={ todo.id }
                                        className="list-group-item d-inline-flex align-items-center"
                                    >
                                        <p 
                                            className={ `task-description ${ todo.done && 'complete' }`}
                                            onClick={ () => handleToggle( todo.id ) }
                                        >{ idx + 1 }. { todo.description }</p>
                                        <button 
                                            className="btn btn-danger"
                                            onClick={ () => handleDelete( todo.id ) }
                                        >Borrar</button>
                                    </li>
                                ))
                        }
                    </ul>

                </div>
            </div>

        </section>
    )
}