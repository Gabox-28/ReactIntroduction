import './TodoCounter.css'

function TodoCounter({total, completed}){
  let content = `Has completado ${completed} de ${total} TODOs`
  if (total === completed){
    content = '¡🎊Has completado todas las tareas🎊!'
  }

  return(
    <h1>{content}</h1>
  )
}

export {TodoCounter}