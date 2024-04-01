import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {add}from "../redux/Slices/cartSlice"
import {remove}from "../redux/Slices/cartSlice"
import toast from 'react-hot-toast'

function Product({post}) {

const {cart}=useSelector((state)=>state)
const dispatch= useDispatch()

const addtocart=()=>{
  dispatch(add(post));
  toast.success("Item added to Cart")
}
const removefromcart=()=>{
dispatch(remove(post.id))
toast.error("Item removed from Cart")
}

  return (
    <div>
    <div>
    <div>
      <p>{post.title}</p>
    </div>
    <div>
      <p>{post.description}</p>
    </div>
    <div>
      <img src={post.image} />
    </div>
    <div>
      <p>{post.price}</p>
    </div>
    {
      cart.some((p)=>p.id === post.id)  ?
      (<button  onClick={removefromcart} >
        Remove Item
        </button>)   :
      (
        <button onClick={addtocart}  > Add To Cart</button>
      )
    }
  </div>
    </div>
  )
}

export default Product
