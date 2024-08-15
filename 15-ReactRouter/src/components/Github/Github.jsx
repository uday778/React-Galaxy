import React from 'react'
// import { useEffect } from 'react'
import {useLoaderData} from 'react-router-dom'


function Github() {

    const data = useLoaderData()

    // const [data, setData] = React.useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/uday778')
    //     .then((response) => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Name: {data.name} <br></br>
    followers: {data.followers}
    <img src={data.avatar_url} width={300} alt="" />
    <div></div>
    </div>
  )
}

export default Github

export const githubInfoLoader=async()=>{
   const res= await fetch('https://api.github.com/users/uday778')
    return res.json()
}




