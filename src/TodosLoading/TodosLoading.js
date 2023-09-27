import './TodosLoading.css'
function TodosLoading(){
  return(
    <>
      <div className={'todo-loading-container'}>
        <div className={'todo-loading-button'}></div>
        <div className={'todo-loading-button'}></div>
      </div>
      <div className={'todo-loading-container'}>
        <div className={'todo-loading-button'}></div>
        <div className={'todo-loading-button'}></div>
      </div>
      <div className={'todo-loading-container'}>
        <div className={'todo-loading-button'}></div>
        <div className={'todo-loading-button'}></div>
      </div>
    </>
  )
}

export {TodosLoading}