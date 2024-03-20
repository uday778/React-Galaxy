import React from 'react'
import { useNavigate } from 'react-router-dom'

function Suport() {
    const routing= useNavigate();
    function clickHandler(){
        routing("/about")
    }
    function moveback(){
        routing(-1)
    }
  return (
    <div>
    <div>
      support page
    </div>
    <button onClick={clickHandler}>move to  about ppage</button>
    <button onClick={moveback}>move back</button>
    </div>
    
  )
}

export default Suport
