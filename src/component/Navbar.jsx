import React from 'react'
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='h-20 w-screen flex items-center justify-between my-2 '>
        <div className='logo hover:cursor-pointer '>
            <img src="./logo-nav.png" alt="" />
        </div>
        <div className='flex justify-around items-center h-full w-fit text-xl gap-x-12 px-18'> 
            <button className='px-6 py-2 border border-gray-400 rounded-full text-black hover:text-white hover:bg-black'>contact</button>
            <h1><IoIosMenu className='text-4xl font-normal hover:cursor-pointer ' /></h1>
        </div>
        </div>

  )
}

export default Navbar