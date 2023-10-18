import './App.css'
import React from "react";
import {useTodos} from "./useTodos";
import {TodoHeader} from "../TodoHeader";
import {TodoCounter} from "../TodoCounter/TodoCounter";
import {TodoSearch} from "../TodoSearch/TodoSearch";
import {TodoList} from "../TodoList/TodoList";
import {TodosLoading} from "../TodosLoading/TodosLoading";
import {TodosError} from "../TodosError/TodosError";
import {TodosEmpty} from "../TodosEmpty/TodosEmpty";
import {TodoItem} from "../TodoItem/TodoItem";
import {CreateTodoButton} from "../CreateTodoButton/CreateTodoButton";
import {Modal} from "../Modal";
import {TodoForm} from "../TodoForm";

function App() {
  const {loading, error, searchedTodos, markTodo, deleteTodo, openModal, completedTodos, totalTodos, searchValue, setSearchValue, toggleModal, addTodo} = useTodos()

  return (
    <>
      <section className={'TodoList'}>
        <TodoHeader>
          <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos}/>
          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
        </TodoHeader>
        <TodoList>
          {loading && <TodosLoading/>}
          {error && <TodosError/>}
          {(!loading && searchedTodos.length === 0) && <TodosEmpty/>}

          {searchedTodos.map(todo => (
            <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onMark={() => markTodo(todo.text)}
                      onDelete={() => deleteTodo(todo.text)}/>
          ))}
        </TodoList>

        <CreateTodoButton toggleModal={toggleModal}/>

        {openModal && (
          <Modal>
            <TodoForm addTodo={addTodo} toggleModal={toggleModal}/>
          </Modal>
        )}
      </section>
    </>
  )
}


export default App;
