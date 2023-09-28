import React from "react";
import './TodoForm.css'
import {TodoContext} from "../TodoContext";

function TodoForm(){
  const {toggleModal, addTodo} = React.useContext(TodoContext)
  const [newTodoValue, setNewTodoValue] = React.useState('')
  const onSubmit = (event) => {
    event.preventDefault()
    toggleModal()
    addTodo(newTodoValue)
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea placeholder={'Cortar cebolla para el almuerzo'} value={newTodoValue} onChange={onChange}/>
      <div className={'todoForm-buttonContainer'}>
        <button className={'todoForm-button todoForm-button--cancel'} onClick={toggleModal}>Cancelar</button>
        <button type={"submit"} className={'todoForm-button todoForm-button--add'}>Añadir</button>
      </div>
    </form>
  )
}

export {TodoForm}