import './TodoCounter.css'
import React from "react";

function TodoCounter({completedTodos, totalTodos}){

  let content = `Has completado ${completedTodos} de ${totalTodos} TODOs`
  if (totalTodos === completedTodos){
    content = '¡🎊Has completado todas las tareas🎊!'
  }

  return(
    <h1>{content}</h1>
  )
}

export {TodoCounter}