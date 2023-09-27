import React from "react";
import {useLocalStorage} from "./useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider({children}){
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

  return (
    <TodoContext.Provider value={{completedTodos, totalTodos, searchValue, setSearchValue, searchedTodos, markTodo, deleteTodo, loading, error}}>
      {children}
    </TodoContext.Provider>
  )
}

export {TodoContext, TodoProvider}