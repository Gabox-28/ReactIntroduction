import {TodoCounter} from "../TodoCounter/TodoCounter";
import {TodoSearch} from "../TodoSearch/TodoSearch";
import {TodoList} from "../TodoList/TodoList";
import {TodoItem} from "../TodoItem/TodoItem";
import {CreateTodoButton} from "../CreateTodoButton/CreateTodoButton";
import React from "react";
import {TodosLoading} from "../TodosLoading/TodosLoading";
import {TodosError} from "../TodosError/TodosError";
import {TodosEmpty} from "../TodosEmpty/TodosEmpty";
import {TodoContext} from "../TodoContext";
import {Modal} from "../Modal";
import {TodoForm} from "../TodoForm";

function AppUI(){
  const {loading, error, searchedTodos, markTodo, deleteTodo, openModal} = React.useContext(TodoContext)

  return (
    <>
      <section className={'TodoList'}>
        <TodoCounter/>
        <TodoSearch />
        <TodoList>
          {loading && <TodosLoading/>}
          {error && <TodosError/>}
          {(!loading && searchedTodos.length === 0) && <TodosEmpty/>}

          {searchedTodos.map(todo => (
            <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onMark={() => markTodo(todo.text)}
                      onDelete={() => deleteTodo(todo.text)}/>
          ))}
        </TodoList>

        <CreateTodoButton/>

        {openModal && (
          <Modal>
            <TodoForm/>
          </Modal>
        )}
      </section>
    </>
  );
}

export {AppUI}