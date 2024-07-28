import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHooks = () => {
    const {counter, increment, decrement, reset} = useCounter()
  return (
    <>
    <h1>Counter with hooks</h1>
    <h2>Value: {counter}</h2>
    <button onClick={() => increment(2)} className="btn btn-primary">+1</button>
    <button onClick={() => decrement(2)} className="btn btn-primary">-1</button>
    <button onClick={reset} className="btn btn-primary">Reset</button>
    </>
    
  )
}
