import React from "react";
import './TodoSearch.css'
import {TodoContext} from "../TodoContext";

function TodoSearch(){
  const {searchValue, setSearchValue} = React.useContext(TodoContext)

  return (
    <div className={'search-container'}>
      <input className={'search-input'} placeholder={'Busca una tarea'} type="text" value={searchValue} onChange={(event) => {
        setSearchValue(event.target.value)
      }}/>
      <i className={"fa fa-search"}></i>
    </div>
  )
}

export {TodoSearch}