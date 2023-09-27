import './TodoCounter.css'
import {TodoContext} from "../TodoContext";
import React from "react";

function TodoCounter(){
  const {completedTodos, totalTodos} = React.useContext(TodoContext)

  let content = `Has completado ${completedTodos} de ${totalTodos} TODOs`
  if (totalTodos === completedTodos){
    content = '¡🎊Has completado todas las tareas🎊!'
  }

  return(
    <h1>{content}</h1>
  )
}

export {TodoCounter}