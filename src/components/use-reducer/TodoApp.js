import React, { useEffect, useReducer } from 'react';

/** Reducer */
import { todoReducer } from './todoReducer';

/** Components */
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';

import './todo-app.css';

/** Establecera el initialState del Reducer */
const init = () => {
    return JSON.parse( localStorage.getItem( 'todos' ) ) || [];
}

/** Functional Component */
export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init );      //  Establece State usando Inicialización diferida del Reducer. permite extraer la lógica para calcular el estado inicial fuera del reductor. También es útil para reiniciar el estado luego en respuesta a una acción. 

    // console.log( todos );

    useEffect(() => {
        localStorage.setItem( 'todos', JSON.stringify( todos ) );   //  Guardar data en el LocalStorage
    }, [ todos ] );

    const handleAddTodo = newTodo => {

        dispatch({
            type: 'ADD',
            payload: newTodo
        });

    }

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

    return (
        <section className="container mt-5">

            <h1>To Do ( { todos.length } ) </h1>  
            <p>Usando el Hook useReducer</p>  
            <hr /> 

            <div className="row">
                <div className="col-5">

                    <TodoForm handleAddTodo={ handleAddTodo } />

                </div>
                <div className="col-7">

                    { todos.length > 0 && (
                        <>
                            <h3>Lista de tareas</h3>
                            <hr />
                        </>
                    )}

                    <TodoList 
                        todos={ todos } 
                        handleToggle={ handleToggle }
                        handleDelete={ handleDelete }
                    />

                </div>
            </div>

        </section>
    )
}
