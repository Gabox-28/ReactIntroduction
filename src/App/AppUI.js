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

function AppUI(){
  const {loading, error, searchedTodos, markTodo, deleteTodo} = React.useContext(TodoContext)

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
      </section>
    </>
  );
}

export {AppUI}