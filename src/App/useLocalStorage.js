import React, {useState} from "react";

function useLocalStorage(itemName, initialValue) {
  const [synchronizedItem, setSynchronizedItem] = useState(false)
  const [item, setItem] = React.useState(initialValue)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem

        if (localStorageItem) {
          parsedItem = JSON.parse(localStorageItem)
          setItem(parsedItem)
        } else {
          localStorage.setItem(itemName, JSON.stringify([]))
          parsedItem = []
        }

        setSynchronizedItem(true)
        setLoading(false)
      }catch (error){
        setError(true)
      }
    }, 2000)
  }, [synchronizedItem])

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  const synchronizeItem = () => {
    setLoading(true)
    setSynchronizedItem(false)
  }

  return {item, saveItem, loading, error, synchronizeItem}
}

export {useLocalStorage}