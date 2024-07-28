import { useMemo, useState } from "react"
import { useCounter } from "../hooks/useCounter"

/*
    useMemo se utiliza para memorizar un valor, es decir, si el valor no cambia, no se vuelve a renderizar
    useMemo(() => fn(), [dependencias])
    fn() -> función que se va a ejecutar
    [dependencias] -> arreglo de dependencias que si cambian, se vuelve a ejecutar la función

*/


const heavyStuff = (iterations) => {
    for (let i = 0; i < iterations; i++) {
        console.log('Ahi vamos...')
    }
    return `${iterations} iteraciones realizadas`
}

export const MemoHook = () => {
    const {counter,increment} = useCounter(2000)
    const [show, setshow] = useState(true)
    // useMemo es un hook que se encarga de memorizar un valor
    const memorizeValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    
   <>
   <h1>Memo Hook</h1>
   <h1>Counter <small>{counter}</small></h1>
   <hr/>
    <h2>{memorizeValue}</h2>
   <button 
        className="btn btn-primary"
        onClick={()=>increment()}>
        +1        
   </button>
    <button 
          className="btn btn-outline-primary ml-3"
          onClick={()=>setshow(!show)}>
          Show/Hide {JSON.stringify(show)}
    </button>
   </>
  )
}
