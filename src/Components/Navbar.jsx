import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between px-2 py-4 bg-slate-500 text white'>

           <NavLink to="/">
                <h2 className='text-2xl'>
                    VASTRALAY
                </h2>
           </NavLink>

           <NavLink to="/">
                <h4 className='text-xl'>Home</h4>
           </NavLink>
           <NavLink to="/cart">
            <h4 className='text-xl'>MY Cart</h4>

           </NavLink>


        </div>
    )
}

export default Navbar
