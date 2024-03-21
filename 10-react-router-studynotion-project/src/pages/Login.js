import React from 'react'
import Template from '../components/Template'
import loginImg from "../assets/login.png"


function Login({setisloggedin}) {
  return (
    
      <Template
      title='Welcome Back'
      desc1="Build Skills for Today,Tommarrow And Beyond."
      desc2="Education to Future- proof your career"
      image={loginImg}
      formtype="login"
      setisloggedin={setisloggedin}
      />

  )
}

export default Login
