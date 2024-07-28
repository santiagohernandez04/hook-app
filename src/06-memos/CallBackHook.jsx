import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallBackHook = () => {
  /*
    Este componente es un ejemplo de uso de useCallback
    useCallback es un hook que se encarga de memorizar una funcion
    y solo se va a disparar si las dependencias cambian
    En este caso la funcion incrementFather se va a disparar solo si cambia
    el valor de las dependencias, en este caso no tiene dependencias
    por lo tanto solo se va a dispar si el componente padre se renderiza
  */	
    const [counter, setcounter] = useState(10);

    const incrementFather = useCallback(
      () => {
        setcounter((value) => value + 1);
      },
      [],
    )
    

    // const incrementFather = () => {
    //     setcounter(counter + 1);
    // }
  return (
    <>
    <h1>CallBackHook</h1>
    <h1>useCallBack Hook: {counter}</h1>
    <hr/>
    <ShowIncrement increment={incrementFather}/>    
    
    </>
  )
}
