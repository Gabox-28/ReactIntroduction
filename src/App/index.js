import {AppUI} from "./AppUI";
import {useLocalStorage} from "../TodoContext/useLocalStorage";
import './App.css'
import React from "react";
import {TodoProvider} from "../TodoContext";

const defaultTodos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Terminar el curso de react', completed: false},
  {text: 'Llorar con la Llorona', completed: true},
]

function App() {
  return (
    <TodoProvider>
      <AppUI  />
    </TodoProvider>
  )
}


export default App;
