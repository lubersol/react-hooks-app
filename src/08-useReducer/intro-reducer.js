

const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}];

// Reducer: función pura que devuelve un state.
const todoReducer = ( state = initialState, action = {} ) => {

    if( action.type === '[TODO] add-todo' ) {
        //Usamos el operador spread para crear una copia del state actual y no modificarlo directamente.
        return [...state, action.payload];
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del Poder',
    done: false,
}

const addTodoAction = {
    type: '[TODO] add-todo',
    payload: newTodo,
}

todos = todoReducer( todos, addTodoAction );

console.log({state: todos});
