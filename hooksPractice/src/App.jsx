import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  // setCount(count+1)
  const add = () =>{
    if(counter>=0){
      setCounter(counter+1);
    }
  }
  const subtracat = () =>{
    if(counter>0){
      setCounter(counter-1);
    }
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Result Area {counter} </h2>

      <button onClick={add}>click to add</button>
      <button onClick={subtracat}>click to subtracat</button>
    </>
  )
}

export default App
