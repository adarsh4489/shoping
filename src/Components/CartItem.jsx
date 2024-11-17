import React from 'react'
import { MdDelete } from "react-icons/md";

const CartItem = ({item,itemindex}) => {
  return (
    <div className=' flex border-2 px-2 py-2 w-full  '>
      
      <div className='object-cover '>
            <img src={item.image} width={200} alt="" />
      </div>
      <div className='flex flex-col justify-between items-center px-2'>
              <div className='text-lg font-semibold'>
                <h1 className=''>{item.name}</h1>
                  <p>{item.price}</p></div>
              <div> <button className='text-red-600 text-2xl'>
                  <MdDelete />
              </button></div>
      </div>

    </div>
  )
}

export default CartItem
