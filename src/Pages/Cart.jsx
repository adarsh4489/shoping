import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../Components/CartItem';

const Cart = () => {
  const { cart } = useSelector((state) => state);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( ()=>{
setTotalAmount(cart.reduce((acc,curr)=>acc + curr.price,0));
  },[cart])

  return (
    <div className='w-full '>
      {
        cart.length > 0 ? (
          <div>
            <div>
              {cart.map((item,index) => {
                return <CartItem key={item.id} itemIndex={index} item={item} />
              })}
            </div>

            <div>
              <div>
                <h2>Cart Summary</h2>
                <p>Total Items : {cart.length}</p>
              </div>

              <div>
                <p>Total Amount:${totalAmount}</p>
                <h2>Checkout</h2>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex flex-col items-center'>
            <h1>Cart is empty</h1>
            <NavLink to="/">
              <button className='bg-green-500 px-4 py-2 rounded-lg text-white font-bold'>Shop Now</button>
            </NavLink>
          </div>
        )
     }
    </div>
  )
}

export default Cart
