import {withStorageListener} from "./withStorageListener";

function ChangeAlert({show, toggleShow}){
  if(show){
    return(
      <>
        <p>Hubo cambios</p>
        <button onClick={() => toggleShow(false)}>Volver a cargar la información</button>
      </>
    )
  }else{
    return null
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export {ChangeAlertWithStorageListener}