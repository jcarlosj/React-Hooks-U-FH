/** Define funcion pura como reducer (controlar acciones) */
export const todoReducer = ( state = [], action ) => {

    switch ( action.type ) {
        case 'ADD':
            return [ ...state, action.payload ];
        case 'DELETE':
            return state.filter( task => task.id !== action.payload );
        case 'TOGGLE': 
            return state.map( task =>       //  Return Implicito
                ( task.id === action.payload )
                    ?   { ...task, done: ! task.done } 
                    :   task
            );
        case 'TOGGLE-OLD':
            return state.map( task => {

                if( task.id === action.payload ) {
                    return {
                        ...task,
                        done: ! task.done
                    }
                } 

                return task;
            });

        default:
            return state;
    }

}