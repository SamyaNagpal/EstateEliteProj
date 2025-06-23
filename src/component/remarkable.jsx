import React from 'react'

const Remarkable = () => {
  return (
    <div className='h-[140vh] w-[95vw] mx-[2vw] mt-23  bg-[#3B3E2D] pt-20 pb-20 px-19 rounded-2xl flex flex-col gap-17'>
      <div className="upper-div w-full h-[40%]">
        <h1 className='text-white font-[geist] text-[6.2vw] leading-[7vw] tracking-tight font-medium'> <span className='font-[windsong] mr-3'>We</span> create remarkable neighbourhoods that encourage exploration and discovery. </h1>
      </div>

      <div className="lower-div h-[60vh] w-[78vw] mt-17 grid grid-cols-[57%_38%] gap-[5%] ">

      
        <img className='h-full w-45vw object-cover rounded-3xl' src="https://cdn.prod.website-files.com/6814fd6e7e1d7b88832c570c/6822f34fb301a0079eed1ae6_property03.webp"alt="" />
      

      <div className="right space-y-4">
        <h1 className='text-white text-xl font-normal tracking-tight leading-tight'>We are committed to purposeful design and development that fosters positive change, growth, and progress to uplift our communities.</h1>
        <h1 className='text-white text-xl font-normal tracking-tight leading-tight'> We aim to create micro communities that enrich and empower our neighborhoods, recognizing the potential in every space.</h1>
        <button className='uppercase mt-14 py-3 px-6   bg-transparent text-white border rounded-4xl border-white' >contact us</button>
      </div>

      </div>


    </div>
  )
}

export default Remarkable