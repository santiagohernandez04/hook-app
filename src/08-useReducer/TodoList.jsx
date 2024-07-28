import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos = [], onDeleteTodo, onToggleTodo}) => {
    // Se recibe un arreglo de objetos con las tareas a realizar
    
    return (
        <>
            <ul className="list-group list-group-flush">
                {
                    // Se recorre el arreglo de objetos y se envía cada
                    // objeto al componente TodoItem
                    todos.map((todo) => (
                        <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                        onDeleteTodo = {onDeleteTodo}
                        onToggleTodo = {onToggleTodo} />

                    ))
                }
            </ul>

        </>
    )
}
