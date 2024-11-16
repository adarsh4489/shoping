import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='flex justify-between text-white  px-6 py-4 bg-slate-700 text white'>

           <NavLink to="/">
                <h2 className='text-2xl'>
                    VASTRALAY
                </h2>
           </NavLink>

          <div className='flex gap-6 items-center justify-evenly'>
                <NavLink to="/">
                    <h4 className='text-xl'>Home</h4>
                </NavLink>
                <NavLink to="/cart">
                    <span className='text-xl'>
                        <FaShoppingCart />
                    </span>

                </NavLink>
          </div>


        </div>
    )
}

export default Navbar
