import './CreateTodoButton.css'
import {TodoContext} from "../App/useTodos";
import React from "react";

function CreateTodoButton({toggleModal}){
  return (
    <div className={'button-container'}>
      <button onClick={toggleModal} ><i className={"fa fa-plus"}></i></button>
    </div>
  )
}

export {CreateTodoButton}