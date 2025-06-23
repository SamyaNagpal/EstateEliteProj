import React from 'react'
import { IoIosMenu } from "react-icons/io";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='h-20 mx-[2vw] z-50 fixed w-[95vw] bg-white/40 backdrop-blur-sm border border-white rounded-2xl flex items-center justify-between my-2 '>

        <div className='w-32  hover:cursor-pointer'>
            <img src="./logo-nav.png" alt="" className='w-32 ml-6' />
        </div>

        <div className='flex justify-end items-center h-full w-fit text-lg font-medium gap-x-12 px-9'> 
          <Link to="#">Properties</Link>
          <Link to="#">Services</Link>
          <Link to="#">About us</Link>
          <Link to="#">Contact us</Link>
          <Link to="#">Blog</Link>
        </div>

        </div>

  )
}

export default Navbar