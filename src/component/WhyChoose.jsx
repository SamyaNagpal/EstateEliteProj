import { LaptopMinimalCheck, ListChecks, Pen, ScrollText, Table2, Warehouse } from 'lucide-react'
import React from 'react'

const WhyChoose = () => {
  return (
    <div className='BG  m-15'>
              <div className="py-12 px-4">
      <div className="max-w-3xl mx-10">
        <h1 className="text-6xl text-black mb-4 ">Why Choose Us</h1>
        <h2 className="text-lg ">
          We believe in perfection through structured and thoughtful design.
        </h2>
      </div>
    </div>
    <div className='BG rounded-xl grid grid-cols-3 gap-4 p-10 -my-8'>

          <div className='h-60 w-100 rounded-xl border border-gray-300 hover:shadow-2xl transition duration-300 ease-in-out bg-white/40 backdrop-blur-sm'>

            <Pen className='mt-3 mx-5 size-8 ' />
            <h1 className='text-3xl text-black mx-4 mt-2'>1. Trusted Market Expertise</h1>

            <h2 className='text-lg mx-4 mt-4 '>We provide deep insights into local property trends, helping you make informed, profitable real estate decisions every time.</h2>

          </div>
          <div className='h-60 w-100  bg-gray-100 rounded-xl border border-gray-300 hover:shadow-2xl transition duration-300 ease-in-out'>

            <ScrollText className='mt-3 mx-5 size-8 '/>
            <h1 className='text-3xl  text-black mx-4 mt-2'>2. Seamless Buying & Selling</h1>

            <h2 className='text-lg mx-4 mt-4'>From first visit to final paperwork, we streamline the process to make every transaction smooth, fast, and hassle-free.</h2>

          </div>
          <div className='h-60 w-100 bg-white/40 rounded-xl border border-gray-300 hover:shadow-2xl transition duration-300 ease-in-out'>

            <Warehouse className='mt-3 mx-5 size-8 ' />
            <h1 className='text-3xl  text-black mx-4 mt-2'>3. Personalized Property Match</h1>

            <h2 className='text-lg mx-4 mt-4'>We understand your goals and present tailored property options that align with your needs, location, and investment plans.</h2>

          </div>
          <div className='h-60 w-100 bg-gray-100 rounded-xl border border-gray-300 hover:shadow-2xl transition duration-300 ease-in-out'>

            <ListChecks className='mt-3 mx-5 size-8 ' />
            <h1 className='text-3xl  text-black mx-4 mt-2'>4. End-to-End Support</h1>

            <h2 className='text-lg mx-4 mt-4'>Our team handles everything — from site tours to documentation — ensuring a stress-free and guided buying experience.</h2>

          </div>
          <div className='h-60 w-100  bg-white/40 rounded-xl border border-gray-300 hover:shadow-2xl transition duration-300 ease-in-out'>

            <Table2 className='mt-3 mx-5 size-8 ' />
            <h1 className='text-3xl  text-black mx-4 mt-2'>5. Transparent Dealings</h1>

            <h2 className='text-lg mx-4 mt-4'>We value honesty and clarity. You’ll always know what to expect — no hidden costs, just straightforward communication.</h2>

          </div>
          <div className='h-60 w-100 bg-gray-100 rounded-xl border border-gray-300 hover:shadow-2xl transition duration-300 ease-in-out'>

            <LaptopMinimalCheck className='mt-3 mx-5 size-8  ' />
            <h1 className='text-3xl  text-black mx-4 mt-2'>6. Exclusive Property Access</h1>

            <h2 className='text-lg mx-4 mt-4'>Get access to premium listings through our extensive broker network — homes and spaces not easily found online.</h2>

          </div>
          
    </div>


    </div>
  )
}

export default WhyChoose