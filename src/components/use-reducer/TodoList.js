import React from 'react';

/** Component */
import { TodoItem } from './TodoItem';

/** Functional Component */
export const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <ul className="list-group list-group-flush">
            {    todos.map( ( todo, idx ) => (
                    <TodoItem 
                        key={ idx }
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
