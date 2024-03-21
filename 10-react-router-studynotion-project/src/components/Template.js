import React from "react";
import frameImage from '../assets/frame.png'
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";


function Template({ title, desc1, desc2, image, formtype, setisloggedin }) {
    return (
        <div>
            <div>
                <h1>{title}</h1>
                <p>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </p>
                {
                    formtype === "signup" ?
                        (<SignupForm setisloggedin={setisloggedin} />) :
                        (<LoginForm  setisloggedin={setisloggedin} />)
                }
                <div>
                    <div></div>
                    <div>OR</div>
                    <div></div>
                </div>
                <button>sign Up With Google</button>
            </div>
            <div>
                <img
                src={frameImage}
                alt="pattern frame"
                height={504}
                width={558}
                loading="lazy"
                ></img>
                <img
                src={image}
                alt="pattern frame"
                height={504}
                width={490}
                loading="lazy"
                ></img>
            </div>
        </div>
    );
}

export default Template;
