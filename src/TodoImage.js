import './TodoImage.css'
import taskImg from './task-image2.png'
function TodoImage(){
  return (
    <div className={'image-container'}>
      <img src={taskImg} alt="TodoImage"/>
    </div>
  )
}

export {TodoImage}