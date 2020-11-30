/*- 1 -- Estado inicial ----------------------------*/

/** Estado Inicial */
const initialState = [{
    id: 1,
    todo: 'Aprender Angular',
    done: false
}];

/** Define funcion pura como reducer (controlar acciones) */
const todoReducer = ( state = initialState, action ) => {

    if( action?.type === 'ADD' ){
        return [ ...state, action.payload ];
    }

    return state;
}

/** Llama el Reducer */
let todos = todoReducer();

/*- 2 - Insertar nuevo registro ----------------------------*/

/** Nuevo registro */
const newTodo = {
    id: 2,
    todo: 'Aprender Vue',
    done: false
};

/** Define la accion */
const addAction = {
    type: 'ADD',
    payload: newTodo
}

/** Llama el Reducer */
todos = todoReducer( todos, addAction );

/*- 1 - Nuestra registros ----------------------------*/
console.log( todos );