import React  from 'react'
import { useSelector } from 
"react-redux";
import  {useState,useEffect} from "react"
import { Link } from "react-router-dom"
import CartItem from '../components/CartItem';


function Cart() {
  const { Cart } = useSelector((state) => state)
  const [totalAmount,setTotalAmount] = useState(0)
  useEffect(()=>{
    setTotalAmount(Cart.reduce((acc,curr)=>acc+curr.price,0));
  },[Cart])


  return (
    <div>
      {
        Cart.length > 0 ?
          (<div>
            <div>
              {
                Cart.map((item, index) => (
                  <CartItem key={item.id} item={item} itemIndex={index} />
                ))
              }
            </div>
            <div>
              <div>
                <div>your CART</div>
                <div>Your summary</div>
                <p>
                  <span>Total Items : {Cart.length} </span>
                </p>
              </div>
              <div>
              <p>Total amount : {totalAmount}</p>
              <button>
              CheckOut Now
              </button>
              </div>
            </div>
          </div>) :
          (<div>
            <h1>Cart is empty</h1>
            <Link to={"/"}>
              <button>shop now</button>
            </Link>
          </div>)
      }
    </div>
  )
}

export default Cart

