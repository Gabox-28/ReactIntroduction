import {TodoCounter} from "./TodoCounter";
import {TodoInput} from "./TodoInput";
import {TodoList} from "./TodoList";
import {TodoItem} from "./TodoItem";
import {CreateTodoButton} from "./CreateTodoButton";
import {TodoSearch} from "./TodoSearch";
import {TodoImage} from "./TodoImage";
import './App.css'
import React from "react";

const defaultTodos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Terminar el curso de react', completed: false},
  {text: 'Llorar con la Llorona', completed: false},
  {text: 'Hola', completed: true},
  {text: 'Hola', completed: true},
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter(todo => todo.completed === true).length
  const totalTodos = todos.length

  return (
    <>

      <section className={'TodoList'}>
        <TodoCounter completed={completedTodos} total={totalTodos}/>
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <TodoList>
          {todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase())).map(todo => (
            <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
          ))}
        </TodoList>

        <CreateTodoButton/>
      </section>
    </>
  );
}


export default App;
