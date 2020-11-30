import React from 'react';

/** Functional Component */
export const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <ul className="list-group list-group-flush">
            {    todos.map( ( todo, idx ) => (
                    <li 
                        key={ todo.id }
                        className="list-group-item d-flex justify-content-between align-items-center"
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
    )
}
