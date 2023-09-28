import './CreateTodoButton.css'
import {TodoContext} from "../TodoContext";
import React from "react";

function CreateTodoButton(){
  const {toggleModal} = React.useContext(TodoContext)

  return (
    <div className={'button-container'}>
      <button onClick={toggleModal} ><i className={"fa fa-plus"}></i></button>
    </div>
  )
}

export {CreateTodoButton}