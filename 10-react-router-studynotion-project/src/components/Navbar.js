import React from 'react'
import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'
import {toast} from 'react-hot-toast';

function Navbar(props) {
  let isloggedin=props.isloggedin;
  let setisloggedin=props.setisloggedin
  return (
    <div className='flex justify-evenly w-full  max-w-[1080px] mx-auto'>
      <Link>
        <img src={logo} width={160} height={32} loading='lazy' alt='logo' to='/' />
      </Link>
      <nav>
        <ul className='flex gap-4'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>

      <div className='flex justify-evenly ml-5 pl-6 gap-10'>
      {
        !isloggedin&&
        <Link to='/login'>
        <button >login</button></Link>
      }
      {
        !isloggedin &&
        <Link to='/signup'>
        <button >signup</button></Link>
      }
      {
        isloggedin &&
        <Link to='/'>
        <button onClick={()=>{
          setisloggedin(false);
          console.log("hello button ");
        toast.success("logged out")
        }}>logout</button></Link>
      }
      {
        isloggedin&&
        <Link to='/dashboard'>
        <button>Dashboard</button></Link>
      }
      </div>

    </div>
  )
}

export default Navbar
