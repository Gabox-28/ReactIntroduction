import './TodoSearch.css'

function TodoSearch(){
  return (
    <div className={'search-container'}>
      <input className={'search-input'} placeholder={'Busca una tarea'} type="text"/>
      <i className={"fa fa-search"}></i>
    </div>
  )
}

export {TodoSearch}