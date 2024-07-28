import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import { useTodo } from '../hooks/useTodo'


export const TodoApp = () => {

    const { todos, handleDeleteTodo, handleToggleTodo, handleNewTodo, todosCount, pendingTodosCount } = useTodo();

    return (
        <>

            <h1>TodoApp: {todosCount}, <small>pendientes: {pendingTodosCount}</small> </h1>            
            <hr />
            <div className="row">
                <div className="col-7">
                    {/* Se envía la lista de tareas al componente TodoList */}
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo} />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    {/* Se envía la función handleNewTodo al componente TodoAdd */}
                    <TodoAdd onNewTodo={handleNewTodo} />

                </div>
            </div>


        </>
    )
}
