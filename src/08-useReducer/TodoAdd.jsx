import React, { useState } from 'react'
import { UseForm } from '../hooks/UseForm';

export const TodoAdd = ({onNewTodo}) => {
    const {formState, onResetForm, onInputChange, description} = UseForm({
        description: ''
    })
    const onFormSubmit = (e) => {
        // Event preventDefault es para evitar
        // que se recargue la página
        event.preventDefault();
        // Si el valor del input está vacío no se hace nada
        if (description.length <= 1) {
            return;
        }
        // Se crea un nuevo objeto con la descripción
        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        }
        // Se llama a la función onNewTodo que se recibe
        // como argumento en el componente TodoApp
        onNewTodo(newTodo);
        // Se llama a la función onResetForm para limpiar
        // el input
        onResetForm();
    }
    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                name="description"
                className="form-control"
                placeholder="¿Qué deseas hacer hoy?"
                autoComplete="off"
                value={description}
                onChange={onInputChange}
            />
            <button
                className="btn btn-outline-primary mt-1 btn-block"
                type="submit"
            >
                Agregar
            </button>
        </form>
    )
}
