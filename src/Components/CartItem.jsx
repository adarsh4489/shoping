import React from 'react'

const CartItem = ({item,itemindex}) => {
  return (
    <div>
      
      <div>
            <img src={item.image} alt="" />
      </div>
      <div>
        <h1>{item.name}</h1>
        <p>{item.price}</p>
        <p>icon</p>
      </div>

    </div>
  )
}

export default CartItem
