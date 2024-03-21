import React, { useState } from 'react'

import toast from 'react-hot-toast'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function LoginForm({setisloggedin}) {

    const Navigate=useNavigate()

    const [formData, setformData] = useState(
        {
            email: "",
            password: "",

        }
    )

    const [showPassword,setshowPassword] = useState(false)

    function changeHandler(event) {
        setformData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    function submitHandler(e){
        e.preventDefault()
        setisloggedin(true)
        toast.success("Logged In")
        Navigate("/dashboard")
    }

    return (
        <form onSubmit={submitHandler}>
            <label>
                <p>
                    Email Address <sup>*</sup>
                </p>
                <input
                    required
                    type='email'
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder='Enter email Id'
                    name='email'
                />
            </label>
            <label>
                <p>
                    Password <sup>*</sup>
                </p>
                <input
                    required
                    type={showPassword?("text"):("password")}
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder='Enter Password'
                    name='password'
                />
                <span onClick={()=>setshowPassword((prev)=>!prev)}>
                {
                    showPassword?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)
                }
                </span>
                <Link
                to="#"
                >
                <p>
                Forgot Password</p></Link>
            </label>

            <button>
            Sign In</button>
        </form>
    )
}

export default LoginForm
