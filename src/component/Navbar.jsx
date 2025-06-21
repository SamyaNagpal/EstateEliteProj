import React from 'react'
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='h-20 mx-[2vw] z-50 fixed w-[95vw] bg-white/40 backdrop-blur-sm border border-white rounded-2xl flex items-center justify-between my-2 '>

        <div className='logo  hover:cursor-pointer'>
            <img src="./logo-nav.png" alt="" />
        </div>

        <div className='flex justify-end items-center h-full w-fit text-md font-medium font-[Montserrat] gap-x-12 px-9'> 
          <h1>Projects</h1>
          <h1>Services</h1>
          <h1>Blogs</h1>
          <h1>About Us</h1>
        </div>

        </div>

  )
}

export default Navbar