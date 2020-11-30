import React from 'react';
import PropTypes from 'prop-types';

/** Component */
import { TodoItem } from './TodoItem';

/** Functional Component */
export const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <ul className="list-group list-group-flush">
            {    todos.map( ( todo, idx ) => (
                    <TodoItem 
                        key={ todo.id }
                        idx={ idx } 
                        todo={ todo }
                        handleToggle={ handleToggle }
                        handleDelete={ handleDelete }
                    />
                ))
            }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired
}
