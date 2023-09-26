import './CreateTodoButton.css'
function CreateTodoButton(){
  return (
    <div className={'button-container'}>
      <button onClick={(event) => {
        console.log('Le diste click')
        console.log(event)
        console.log(event.target)
      }} ><i className={"fa fa-plus"}></i></button>
    </div>
  )
}

export {CreateTodoButton}