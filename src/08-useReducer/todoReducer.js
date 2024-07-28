export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case '[TODO] add Todo':
            // retorna un nuevo estado con el nuevo TODO
            return [...initialState, action.payload];


        case '[TODO] Remove Todo':
            return initialState.filter(todo => todo.id !== action.payload);


        case '[TODO] Remove Todo':
            // retorna un nuevo estado sin el TODO que se desea borrar
            return initialState.filter(todo => todo.id !== action.payload);
        // Lo que hace el .filter es que recorre el arreglo de objetos y
        // retorna un nuevo arreglo de objetos con todos. Los objetos que
        // cumplan con la condición de que el id del objeto sea diferente
        // al id del objeto que se desea borrar (action.payload) 

        case '[TODO] Toggle Todo':
            // retorna un nuevo estado con el TODO que se desea modificar
            return initialState.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } 
                    return todo;
            });
        default:
            return initialState;
    }
}