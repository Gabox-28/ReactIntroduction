import {TodoCounter} from "../TodoCounter/TodoCounter";
import {TodoInput} from "../TodoInput/TodoInput";
import {TodoList} from "../TodoList/TodoList";
import {TodoItem} from "../TodoItem/TodoItem";
import {CreateTodoButton} from "../CreateTodoButton/CreateTodoButton";
import {TodoSearch} from "../TodoSearch/TodoSearch";
import {useLocalStorage} from "./useLocalStorage";
import './App.css'
import React from "react";

const defaultTodos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Terminar el curso de react', completed: false},
  {text: 'Llorar con la Llorona', completed: true},
]

function Index() {
  const [todos, saveTodos] = useLocalStorage()
  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter(todo => todo.completed === true).length
  const totalTodos = todos.length



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
    <>
      <section className={'TodoList'}>
        <TodoCounter completed={completedTodos} total={totalTodos}/>
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <TodoList>
          {todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase())).map(todo => (
            <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onMark={() => markTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}/>
          ))}
        </TodoList>

        <CreateTodoButton/>
      </section>
    </>
  );
}


export default Index;
