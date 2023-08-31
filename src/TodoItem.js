import './TodoItem.css'
function TodoItem({text, completed}){
  return (
    <div className={'item-container'}>
      <li>
        <input className={'checkbox'} type="checkbox"/>
        <p>{text}</p>
        <i className={"fa fa-remove icon"}></i>
      </li>
    </div>
  )
}

export {TodoItem}