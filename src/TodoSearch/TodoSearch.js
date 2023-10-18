import React from "react";
import './TodoSearch.css'

function TodoSearch({searchValue, setSearchValue, loading}){

  return (
    <div className={'search-container'}>
      <input className={'search-input'} placeholder={'Busca una tarea'} type="text" value={searchValue} onChange={(event) => {
        setSearchValue(event.target.value)
      }} disabled={loading}/>
      <i className={"fa fa-search"}></i>
    </div>
  )
}

export {TodoSearch}