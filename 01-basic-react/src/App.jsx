import { useState } from 'react'

import './App.css'
import Chai from './Chai'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Chai aur code | Uday kumar </h1>
      <Chai/>
    </>
  )
}

export default App
