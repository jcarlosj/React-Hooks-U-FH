/** Define funcion pura como reducer (controlar acciones) */
export const todoReducer = ( state = [], action ) => {

    switch ( action.type ) {
        case 'ADD':
            return [ ...state, action.payload ];
        case 'DELETE':
            return state.filter( task => task.id !== action.payload );

        default:
            return state;
    }

}