import { LaptopMinimalCheck, ListChecks, Pen, ScrollText, Table2, Warehouse } from 'lucide-react'
import React from 'react'

const WhyChoose = () => {
  return (
    <div className='BG m-15'>
              <div className="py-12 px-4">
      <div className="max-w-3xl mx-10">
        <h1 className="text-6xl text-blue-950 mb-4 ">Why Choose Us</h1>
        <h2 className="text-lg text-gray-600">
          We believe in perfection through structured and thoughtful design.
        </h2>
      </div>
    </div>
    <div className='BG grid grid-cols-3 gap-4 p-10 -my-8'>

          <div className='h-60 w-100 bg-gray-100 rounded-xl border border-gray-300 hover:shadow-2xl transition duration-300 ease-in-out '>

            <Pen className='mt-3 mx-5 size-8 text-gray-600' />
            <h1 className='text-3xl text-blue-950 mx-4 mt-2'>Precision in Design</h1>

            <h2 className='text-lg mx-4 mt-4 '>Our team’s expertise ensures professionalism and reliability, making your real estate journey seamless</h2>

          </div>
          <div className='h-60 w-100  bg-gray-100 rounded-xl border border-gray-300 hover:shadow-2xl transition duration-300 ease-in-out'>

            <ScrollText className='mt-3 mx-5 size-8  text-gray-600'/>
            <h1 className='text-3xl  text-blue-950 mx-4 mt-2'>Structural Excellence</h1>

            <h2 className='text-lg mx-4 mt-4'>Our designs beauty with stability, ensuring durability and safety without compromising aesthetics.</h2>

          </div>
          <div className='h-60 w-100 bg-gray-100 rounded-xl border border-gray-300 hover:shadow-2xl transition duration-300 ease-in-out'>

            <Warehouse className='mt-3 mx-5 size-8  text-gray-600' />
            <h1 className='text-3xl  text-blue-950 mx-4 mt-2'>Sustainable Innovation</h1>

            <h2 className='text-lg mx-4 mt-4'>We integrate eco-friendly materials and energy-efficient solutions to build a greener, more sustainable future.</h2>

          </div>
          <div className='h-60 w-100 bg-gray-100 rounded-xl border border-gray-300 hover:shadow-2xl transition duration-300 ease-in-out'>

            <ListChecks className='mt-3 mx-5 size-8  text-gray-600' />
            <h1 className='text-3xl  text-blue-950 mx-4 mt-2'>Creative Vision</h1>

            <h2 className='text-lg mx-4 mt-4'>From modern minimalism to intricate classical forms, we bring unique artistic expression to every project.</h2>

          </div>
          <div className='h-60 w-100  bg-gray-100 rounded-xl border border-gray-300 hover:shadow-2xl transition duration-300 ease-in-out'>

            <Table2 className='mt-3 mx-5 size-8  text-gray-600' />
            <h1 className='text-3xl  text-blue-950 mx-4 mt-2'>Client-Centric Approach</h1>

            <h2 className='text-lg mx-4 mt-4'>Your vision is at the heart of our designs. We collaborate closely to bring your dream space to life.</h2>

          </div>
          <div className='h-60 w-100 bg-gray-100 rounded-xl border border-gray-300 hover:shadow-2xl transition duration-300 ease-in-out'>

            <LaptopMinimalCheck className='mt-3 mx-5 size-8  text-gray-600' />
            <h1 className='text-3xl  text-blue-950 mx-4 mt-2'>Excellence</h1>

            <h2 className='text-lg mx-4 mt-4'>Our team’s expertise ensures professionalism and reliability, making your real estate journey seamless</h2>

          </div>
          
    </div>


    </div>
  )
}

export default WhyChoose