import './TodoInput.css'

function TodoInput({placeholder}){
  return (
    <input className={'txtInput'} placeholder={placeholder}/>
  )
}

export {TodoInput}