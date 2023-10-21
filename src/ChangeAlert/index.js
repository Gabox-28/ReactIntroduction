import {useStorageListener} from "./useStorageListener";

function ChangeAlert({synchronize}){
  const {show, toggleShow} = useStorageListener(synchronize)

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

export {ChangeAlert}