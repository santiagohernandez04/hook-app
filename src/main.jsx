import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks'
// import { SimpleForm } from './02-useEfect/SimpleForm'
// import { FormWithCustomHook } from './02-useEfect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import { Memorize } from './06-memos/Memorize'
//import { MemoHook } from './06-memos/MemoHook'
//import { CallBackHook } from './06-memos/CallBackHook'
//import { Padre } from './07-tarea-memo/Padre'
//import './08-useReducer/intro-reducer'
import { TodoApp } from './08-useReducer/TodoApp'
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <TodoApp />
  // </React.StrictMode>,
)
