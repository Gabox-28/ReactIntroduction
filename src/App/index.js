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
import {ChangeAlert} from "../ChangeAlert";

function App() {
  const {loading, error, searchedTodos, markTodo, deleteTodo, openModal, completedTodos, totalTodos, searchValue, setSearchValue, toggleModal, addTodo, synchronizeTodos} = useTodos()

  return (
    <>
      <section className={'TodoList'}>
        <TodoHeader loading={loading}>
          <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos}/>
          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
        </TodoHeader>

        <TodoList error={error} onError={() => <TodosError/>}
                  loading={loading} onLoading={() => <TodosLoading/>}
                  searchedTodos={searchedTodos} onEmptyTodos={() => <TodosEmpty/>}
                  totalTodos={totalTodos} searchText={searchValue} onEmptySearchResults={(searchText) => <p>No hay resultados para {searchText}</p>}
                  render={todo => (
                    <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onMark={() => markTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}/>
                  )}/>


        <CreateTodoButton toggleModal={toggleModal}/>

        {openModal && (
          <Modal>
            <TodoForm addTodo={addTodo} toggleModal={toggleModal}/>
          </Modal>
        )}

        <ChangeAlert synchronize={synchronizeTodos}/>
      </section>
    </>
  )
}


export default App;
