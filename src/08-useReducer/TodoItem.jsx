import React from 'react'

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
    // Se recibe un objeto con la tarea a realizar y se muestra
    // en el componente TodoItem que se encarga de mostrar la tarea y
    // un botón para borrar la tarea de la lista de tareas pendientes
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span
                className={`align-self-center ${(todo.done) ? 'text-decoration-line-through' : ''}`}
                onClick={() => onToggleTodo(todo.id)}
            >
                {todo.description}
            </span>
            <button
                onClick={() => onDeleteTodo(todo.id)}
                className="btn btn-danger">Borrar</button>
        </li>
    )
}
