
import React from 'react'
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import {remove} from "../redux/Slices/cartSlice"
import toast from 'react-hot-toast'



function CartItem({ item, itemIndex }) {
  const dispatch=useDispatch()

  const removefromcart=()=>{
    dispatch(remove(item.id))
    toast.error("item removed from cart")
  }
  return (
    <div>
      <div>
        <div>
          <img src={item.image} />
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <div>
          <p>
            {item.price}
          </p>
          </div>
          <div onClick={removefromcart} >
          <AiFillDelete />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
