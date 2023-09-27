import {AppUI} from "./AppUI";
import {useLocalStorage} from "./useLocalStorage";
import './App.css'
import React from "react";

const defaultTodos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Terminar el curso de react', completed: false},
  {text: 'Llorar con la Llorona', completed: true},
]

function Index() {
  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter(todo => todo.completed === true).length
  const totalTodos = todos.length
  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))

  const markTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.text === text)
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.text === text)
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return (<AppUI completedTodos={completedTodos} totalTodos={totalTodos} searchValue={searchValue} setSearchValue={setSearchValue} searchedTodos={searchedTodos} completeTodo={markTodo} deleteTodo={deleteTodo} loading={loading} error={error} />)
}


export default Index;
