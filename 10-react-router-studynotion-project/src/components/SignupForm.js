import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useNavigate } from 'react-router-dom'
function SignupForm({setisloggedin}) {
    const navigate= useNavigate()
    const [formData, setformData] = useState(
        {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmPassoword: "",
        },
    )

    const [showPassword, setshowPassword] = useState(false)


    function changeHandler(event) {
        setformData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }


function submitHander(event){
    event.preventDefault()
    if(formData.password !=formData.confirmPassoword){
        toast.error("password not matched");
        return
    };
    setisloggedin(true);
    toast.success("account created");
    const accountData=({
        ...formData

    })
    console.log(accountData);
    navigate('/dashboard');
}



    return (
        <div>
            <div>
                <button>
                    student
                </button>
                <button>
                    Instructer
                </button>
            </div>
            <form onSubmit={submitHander}>
                {/*first name ,last name */}
                <div>
                    <label>
                        <p>first name <sup>*</sup> </p>
                        <input
                            type='text'
                            required
                            name='firstname'
                            onChange={changeHandler}
                            placeholder='enter dirst name'
                            value={formData.firstname}
                        ></input>
                    </label>

                    <label>
                        <p>last name <sup>*</sup> </p>
                        <input
                            type='text'
                            required
                            name='lastname'
                            onChange={changeHandler}
                            placeholder='enter last name'
                            value={formData.lastname}
                        ></input>
                    </label>
                </div>
                {/*email added by*/}
                <label>
                    <p>Email Address <sup>*</sup> </p>
                    <input
                        type='email'
                        required
                        name='email'
                        onChange={changeHandler}
                        placeholder='enter email'
                        value={formData.email}
                    ></input>
                </label>

                {/*createpassword and confirm Password*/}
                <label>
                    <p>create passowrd <sup>*</sup> </p>
                    <input
                        type={showPassword ? ("text") : ("password")}
                        required
                        name='password'
                        onChange={changeHandler}
                        placeholder='enter password'
                        value={formData.password}
                    ></input>
                    <span onClick={() => setshowPassword((prev) => !prev)}>
                        {
                            showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)
                        }
                    </span>
                </label>


                <label>
    <p>confirm password <sup>*</sup> </p>
    <input
        type={showPassword ? "text" : "password"}
        required
        name='confirmPassoword' 
        onChange={changeHandler}
        placeholder='re-enter password' 
        value={formData.confirmPassoword} 
    />
    <span onClick={() => setshowPassword(prev => !prev)}>
        {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
    </span>
</label>

                <button>Create An Account </button>
            </form>
        </div>
    )
}

export default SignupForm
