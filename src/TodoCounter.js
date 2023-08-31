import './TodoCounter.css'

function TodoCounter({total, completed}){
  return(
    <h1>
      Has completado {completed} de {total} TO DOs
    </h1>
  )
}

export {TodoCounter}