import './TodoItem.css'
function TodoItem({ text, completed, onMark, onDelete}){
  return (
    <div className={'item-container'}>
      <li>
        <i className={`fa fa-check icon ${completed && "icon-completed"}`} onClick={onMark}></i>
        <p className={`${completed && "text-completed"}`}>{text}</p>
        <i className={"fa fa-remove icon-close"} onClick={onDelete}></i>
      </li>
    </div>
  )
}

export {TodoItem}