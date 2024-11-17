import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../Redux/Slices/CartSlice';
import { toast } from 'react-toastify';

const CartItem = ({item,itemindex}) => {
    const dispatch=useDispatch();
    const removeFromCart=()=>{
        dispatch(remove(item.id));
        toast.success("Item Removed");
    };

  return (
    <div className=' flex border-2 px-2 py-2 w-full  '>
      
      <div className='object-cover '>
            <img src={item.image} width={200} alt="" />
      </div>
      <div className='flex flex-col justify-between items-center px-2'>
              <div className='text-lg font-semibold'>
                <h1 className=''>{item.name}</h1>
                  <p>{item.price}</p></div>
              <div> <button className='text-red-600 text-2xl' onClick={removeFromCart}>
                  <MdDelete />
              </button></div>
      </div>

    </div>
  )
}

export default CartItem
