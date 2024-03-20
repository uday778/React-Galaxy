import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
    const rouying=useNavigate()
    function clickHandler(){
        rouying("/")
    }
  return (
    <div>
    <div>  About page </div>
    <button onClick={clickHandler}>move to home page</button>
    </div>
  )
}

export default About
