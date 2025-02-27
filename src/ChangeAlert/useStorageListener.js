import {Component, useEffect, useState} from "react";

function useStorageListener({synchronize}){
  const [storageChange, setStorageChange] = useState(false)

  useEffect(() => {
    window.addEventListener('storage', (change) => {
      if(change.key === 'TODOS_V1'){
        setStorageChange(true)
      }
    })
  }, []);

  const toggleShow = () => {
    synchronize()
    setStorageChange(false)
  }

  return {
    show: storageChange,
    toggleShow
  }
}

export {useStorageListener}