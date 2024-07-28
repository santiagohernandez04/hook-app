import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

// Empelamos un arreglo de objetos para simular una lista de tareas
const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del alma',
    //     done: false
    // },
]
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}
export const useTodo = () => {
     // useReducer recibe como argumento el reducer y el estado
    // inicial del reducer y retorna un arreglo con el estado y
    // la función dispatch que se encarga de enviar acciones al
    // reducer para que este pueda realizar una acción
    const [todos, dispatch] = useReducer(todoReducer, initialState, init)
    // La función handleNewTodo recibe un nuevo TODO y se encarga
    // de enviar una acción al reducer para que este pueda agregar
    // el nuevo TODO al estado
    const handleNewTodo = (newTodo) => {
        const action = {
            type: '[TODO] add Todo',
            payload: newTodo
        }
        dispatch(action)
    }
    // useEffect se ejecuta cada vez que el estado de la lista de tareas
    // cambia y se encarga de guardar la lista de tareas en el localStorage
    useEffect   (() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    
    const handleDeleteTodo = (todoId) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: todoId
        })
        console.log(todoId)
    }
    const handleToggleTodo = (todoId) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: todoId
        })
    }
    const todosCount = todos.length
    const pendingTodosCount = todos.filter(todo => !todo.done).length

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount, 
    pendingTodosCount
    

  }
}
