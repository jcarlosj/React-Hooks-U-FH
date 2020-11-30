import React from 'react';

export const TodoItem = ({ idx, todo, handleToggle, handleDelete }) => {
    return (
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
    )
}
