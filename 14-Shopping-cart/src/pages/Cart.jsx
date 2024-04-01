import { useSelector } from "react-redux"

import CartItem from "../components/CartItem"
import React from 'react'
import { NavLink } from "react-router-dom"
import {useState,useEffect} from "react"

function Cart() {

  const { cart } = useSelector((state) => state)
  
  const [totalAmount,setToatlAmount]=useState(0);

  useEffect(() => {
    setToatlAmount(cart.reduce((acc,curr)=>acc+curr.price,0))
  },[cart])
  


  return (
    <div>
      {
        cart.length > 0 ?
          (
            <div>
              <div>
                {
                  cart.map((item,index)=>(
                    <CartItem key={item.id} item={item} itemIndex={index} />
                  )
                  )
                }
              </div>
              <div>
                <div>
                  <div>Your Cart</div>
                  <div>Summary</div>
                </div>
                <p>
                <span>Total Items : {cart.length} </span>
                </p>
              </div>
              <div>
                <p>
                Total Amount : {totalAmount}
                </p>
                <button>
                check out now
                </button>
              </div>
            </div>
          ) :
          (
            <div>
              <h1>Cart is empty</h1>
              <NavLink to={"/"} >
                <button>Shop Now</button>
              </NavLink>
            </div>
          )
      }
    </div>
  )
}

export default Cart


