import React from 'react'
import Template from '../components/Template';
import signupImg from "../assets/signup.png"

function SignUp({setisloggedin}) {
  return (
    <Template
    title='Welcome Back'
    desc1="Build Skills for Today,Tommarrow And Beyond."
    desc2="Education to Future- proof your career"
    image={signupImg}
    formtype="signup"
    setisloggedin={setisloggedin}
    />
  )
}

export default SignUp
