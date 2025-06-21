import React from 'react'

const About = () => {
  return (
    <div className="py-8 px-4">
      <div className="text-center space-y-5">
        <h1 className="font-semibold text-5xl text-blue-950">Find Your Perfect Place</h1>
        <h2 className="text-xl text-gray-500">
          Our portfolio of award-winning designs that have transformed skylines
        </h2>
      </div>
      <div className="h-[86vh] w-[90vw] bg-gray-300 mx-auto my-6 overflow-hidden rounded-lg relative">
        <img
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 "src="/image1.avif"alt=""/>

        <div className="absolute top-5 left-5 flex space-x-3">

          <button className="bg-[#0000003c] text-white px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105">NEW YORK NY</button>

          <button className="backdrop-sepia-[20px] bg-[#0000003c] text-white px-4 py-2 rounded-xl transition-all duration-300  hover:scale-105">COMMERCIAL</button>

        </div>
      </div>
    </div>
  )
}

export default About