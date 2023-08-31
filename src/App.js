import {TodoCounter} from "./TodoCounter";
import {TodoInput} from "./TodoInput";
import {TodoList} from "./TodoList";
import {TodoItem} from "./TodoItem";
import {CreateTodoButton} from "./CreateTodoButton";
import {TodoSearch} from "./TodoSearch";
import {TodoImage} from "./TodoImage";
import './App.css'

const defaultTodos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Terminar el curso de react', completed: false},
  {text: 'Llorar con la Llorona', completed: false},
  {text: 'Hola', completed: true},
  {text: 'Hola', completed: true},
]

function App() {
  return (
    <>
      <section className={'NewTodos'}>
        <h1>Agrega una nueva tarea</h1>
        <TodoInput placeholder={'Nueva tarea'}/>
        <CreateTodoButton/>
        <TodoImage/>
      </section>


      <section className={'TodoList'}>
        <TodoCounter completed={3} total={9}/>
        <TodoSearch/>
        <TodoList>
          {defaultTodos.map(todo => (
            <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
          ))}
        </TodoList>
      </section>

    </>
  );
}


export default App;
