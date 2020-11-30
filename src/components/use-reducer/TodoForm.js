import React from 'react';

/** Hooks */
import { useForm } from '../../hooks/useForm';

/** Functional Component */
export const TodoForm = ({ handleAddTodo }) => {

    const [ formValues, handleInputChange, reset ] = useForm({
        description: ''
    });

    // console.log( formValues );

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

        handleAddTodo( newTodo  );
        reset();

    }

    return (
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
    )
}
