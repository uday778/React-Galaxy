import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let obj = {
    name: "uday kumar",
    age: 21,
  }
  let newarr = [1, 2, 3]


  return (
    <>
      <div>
        <h1 className='mb-20 p-6 bg-green-400 rounded-3xl'>tailwind  css </h1>

        <Card name="uday kumar" btntext="click me"/>

        <Card name="arjun"  btntext="visit me"/>


      </div>

    </>
  )
}

export default App
