import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // useState({} || [] 0 ||) //default values 

  let [counter,setcount]=useState(1)



const addvalue=()=>{
  
  counter=counter+1
  setcount(counter)
  console.log("clicked addvakue",counter);
}
const removevalue=()=>{

  counter=counter-1
  setcount(counter)
    console.log("removed",counter);
}

  return (
    <>
      <h1>uday kumar</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addvalue}>Add Value {counter} </button>
      <br/>
      <button onClick={removevalue}>Remove Value value {counter}</button>
      <div>footer :  {counter} </div>
    </>
  )
}

export default App
