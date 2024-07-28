// Ejemplo de uso de useReducer
// useReducer es una alternativa a useState. useReducer es más poderoso
// que useState. useReducer se recomienda cuando se tiene un estado
// complejo que depende de múltiples subvalores o cuando se necesita
// realizar acciones asíncronas. useReducer se utiliza para manejar
// estados complejos. 
// useReducer recibe dos argumentos: el reducer y el estado inicial.
// useReducer retorna un arreglo con el estado y la función dispatch.
// El reducer es una función que recibe el estado actual y una acción
// y retorna un nuevo estado. La función dispatch se encarga de enviar
// acciones al reducer para que este pueda realizar una acción.
const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done: false
}]
// El reducer es una función que recibe el estado actual y una acción
// y retorna un nuevo estado dependiendo de la acción que reciba.
// El reducer siempre debe retornar un nuevo estado. Nunca debe modificar
// el estado actual. El reducer es una función pura.
// El reducer es una función pura porque siempre retorna el mismo resultado
// para los mismos argumentos. El reducer no debe tener efectos secundarios.
// El reducer no debe modificar el estado actual. El reducer no debe llamar
// a APIs o funciones asíncronas. El reducer no debe llamar a funciones 
// que modifiquen el estado de la aplicación.
const todoReducer = (state = initialState, action = {}) => {
    // Se evalúa el tipo de acción que se recibe y se retorna un nuevo
    // estado dependiendo de la acción que se recibe.
    if (action.type === 'add') {
        return [...state, action.payload];
    }
    // Nunca hacer .push()

    return state;
}
// Se crea un nuevo TODO
let todos = todoReducer();


const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del tiempo',
    done: false
}

// addTodoAction es una acción que se va a enviar al reducer
// para que el reducer pueda realizar una acción
const addTodoAction = {
    // El tipo de acción es 'add' y se envía un nuevo TODO
    type: 'add',
    // payload es el nuevo TODO que se va a agregar al estado
    payload: newTodo
}
// Se envía la acción al reducer para que este pueda realizar una acción
todos = todoReducer(todos, addTodoAction);
console.log({state: todos});
// NO hacer
// todos.push();