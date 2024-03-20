import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Labs() {
   const routing= useNavigate();
    function clickHandler(){
        //move to about page 
        routing("/support")

    }
    return (
        <div>
            <div>
                Labs page
            </div>
            <button onClick={clickHandler}>move to about page </button>
        </div>

            )
}

            export default Labs
