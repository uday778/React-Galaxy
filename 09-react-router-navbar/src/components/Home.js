import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'


function Home() {
    const routing = useNavigate()
    function clickHandler(){
        routing("/labs")
    }
  return (
    <div>
    <div>
    this is my HomePage 
    </div>
    <button onClick={clickHandler}>move to labs</button>
    </div>
    
  )
}

export default Home
