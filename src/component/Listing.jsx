import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";
import { TbRulerMeasure } from "react-icons/tb";

const Listing = () => {
  return (
    <div>
      <div className='w-full flex items-center justify-between '>
        <div>
          <p className='text-7xl text-black mt-20 mb-6 ml-10 '>
         <span className='font-span' >choosen</span>  properties</p>
          </div>
        {/* <div className='flex  gap-7 mt-18 px-20 '>
          <FaArrowLeft className='w-20 h-13 font-500  rounded-full border border-black' />
          <FaArrowRight className='w-20 h-13 font-light rounded-full border border-black' />
        </div> */}
      
      </div>
      <div className='grid grid-cols-3 cursor-pointer px-5 h-140'>
        <div className='h-100 w-full'>
          <img className='h-full w-full rounded-2xl' src="https://primehomz.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-07-23-at-3.23.24-PM-pvykfkanj4j0vxdimuhlrzrlxr7lr17vdnxiklm4w0.jpeg" alt="" />
        <div class="p-4 space-y-3">
    <div class="flex items-center space-x-6 text-[#323628] text-sm font-medium">
      <div class="flex items-center gap-1">
        <span class="text-xl"><IoBedOutline /></span>
        <span>4 bd</span>
      </div>
      <div class="flex items-center gap-1">
        <span class="text-xl"><PiBathtub /></span>
        <span>3 ba</span>
      </div>
      <div class="flex items-center gap-1">
        <span class="text-xl">📐</span>
        <span>1000 spft</span>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <h3 class="text-2xl font-semibold text-[#323628]">Raj Niwas</h3>
      <button class="border border-[#d2d2c6] rounded-full px-4 py-1 text-sm font-medium text-[#323628] hover:bg-[#e9e9dc] transition">
        VIEW
      </button>
    </div>
    <p class="text-sm text-gray-600">
      ₹ 1.2 Cr • Gali No.2, Chandni Chowk
    </p>
       </div>
        </div>
        <div className='h-100 w-full'>
          <img className='rounded-2xl' src="https://primehomz.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-07-23-at-3.23.50-PM-pvykfkanj4j0vxdimuhlrzrlxr7lr17vdnxiklm4w0.jpeg" alt="" />
       <div class="p-4 space-y-3">
    <div class="flex items-center space-x-6 text-[#323628] text-sm font-medium">
      <div class="flex items-center gap-1">
        <span class="text-xl"><IoBedOutline /></span>
        <span>4 bd</span>
      </div>
      <div class="flex items-center gap-1">
        <span class="text-xl"><PiBathtub /></span>
        <span>3 ba</span>
      </div>
      <div class="flex items-center gap-1">
        <span class="text-xl">📐</span>
        <span>1000 spft</span>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <h3 class="text-2xl font-semibold text-[#323628]">sector 14</h3>
      <button class="border border-[#d2d2c6] rounded-full px-4 py-1 text-sm font-medium text-[#323628] hover:bg-[#e9e9dc] transition">
        VIEW
      </button>
    </div>
    <p class="text-sm text-gray-600">
     ₹ 1.2 Cr • 103 Sec 14 Gurugram
    </p>
  </div>
</div>
        <div className='h-100 w-full'>
          <img className='rounded-2xl' src="https://primehomz.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-07-23-at-3.23.50-PM-pvykfkanj4j0vxdimuhlrzrlxr7lr17vdnxiklm4w0.jpeg" alt="" />
       <div class="p-4 space-y-3">
    <div class="flex items-center space-x-6 text-[#323628] text-sm font-medium">
      <div class="flex items-center gap-1">
        <span class="text-xl"><IoBedOutline /></span>
        <span>4 bd</span>
      </div>
      <div class="flex items-center gap-1">
        <span class="text-xl"><PiBathtub /></span>
        <span>3 ba</span>
      </div>
      <div class="flex items-center gap-1">
        <span class="text-xl">📐</span>
        <span>1000 spft</span>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <h3 class="text-2xl font-semibold text-[#323628]">371/1</h3>
      <button class="border border-[#d2d2c6] rounded-full px-4 py-1 text-sm font-medium text-[#323628] hover:bg-[#e9e9dc] transition">
        VIEW
      </button>
    </div>
    <p class="text-sm text-gray-600">
      ₹ 80 Lakh • opp. narang catering,Gurgaon
    </p>
  </div>
</div>
        </div>
              <div className='grid grid-cols-3 cursor-pointer px-5 mb-26 h-100'>
        <div className='h-100 w-full'>
          <img className='h-full w-full rounded-2xl' src="https://primehomz.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-07-23-at-3.23.24-PM-pvykfkanj4j0vxdimuhlrzrlxr7lr17vdnxiklm4w0.jpeg" alt="" />
        <div class="p-4 space-y-3">
    <div class="flex items-center space-x-6 text-[#323628] text-sm font-medium">
      <div class="flex items-center gap-1">
        <span class="text-xl"><IoBedOutline /></span>
        <span>4 bd</span>
      </div>
      <div class="flex items-center gap-1">
        <span class="text-xl"><PiBathtub /></span>
        <span>3 ba</span>
      </div>
      <div class="flex items-center gap-1">
        <span class="text-xl">📐</span>
        <span>1000 spft</span>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <h3 class="text-2xl font-semibold text-[#323628]">Ansal Satbari</h3>
      <button class="border border-[#d2d2c6] rounded-full px-4 py-1 text-sm font-medium text-[#323628] hover:bg-[#e9e9dc] transition">
        VIEW
      </button>
    </div>
    <p class="text-sm text-gray-600">
      ₹ 80 Lakh • 495 Sec 52 Gurugram
    </p>
       </div>
        </div>
        <div className='h-100 w-full'>
          <img className='rounded-2xl' src="https://primehomz.com/wp-content/uploads/elementor/thumbs/ame2-qp76yjt99pkmemf8clctjmdpkubyyvig7jcioa8xts.jpg" alt="" />
       <div class="p-4 space-y-3">
    <div class="flex items-center space-x-6 text-[#323628] text-sm font-medium">
      <div class="flex items-center gap-1">
        <span class="text-xl"><IoBedOutline /></span>
        <span>4 bd</span>
      </div>
      <div class="flex items-center gap-1">
        <span class="text-xl"><PiBathtub /></span>
        <span>3 ba</span>
      </div>
      <div class="flex items-center gap-1">
        <span class="text-xl">📐</span>
        <span>1000 spft</span>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <h3 class="text-2xl font-semibold text-[#323628]">Shri heights</h3>
      <button class="border border-[#d2d2c6] rounded-full px-4 py-1 text-sm font-medium text-[#323628] hover:bg-[#e9e9dc] transition">
        VIEW
      </button>
    </div>
    <p class="text-sm text-gray-600">
       ₹ 80 Lakh • house no. 300, ashok vihar
    </p>
  </div>
</div>
        <div className='h-100 w-full'>
          <img className='rounded-2xl' src="https://primehomz.com/wp-content/uploads/elementor/thumbs/ame2-qp76yjt99pkmemf8clctjmdpkubyyvig7jcioa8xts.jpg" alt="" />
       <div class="p-4 space-y-3 w-full">
    <div class="flex items-center space-x-6 text-[#323628] text-sm font-medium">
      <div class="flex items-center gap-1">
        <span class="text-xl"><IoBedOutline /></span>
        <span>4 bd</span>
      </div>
      <div class="flex items-center gap-1">
        <span class="text-xl"><PiBathtub /></span>
        <span>3 ba</span>
      </div>
      <div class="flex items-center gap-1">
        <span class="text-xl">📐</span>
        <span>1000 spft</span>
      </div>
    </div>
   <div class="flex items-center justify-between">
      <h3 class="text-2xl font-semibold text-[#323628]">Baig Niwas</h3>
      <button class="border border-[#d2d2c6] rounded-full px-4 py-1 text-sm font-medium text-[#323628] hover:bg-[#e9e9dc] transition">
        VIEW
      </button>
    </div>
    <p class="text-sm text-gray-600">
      ₹ 80 Lakh • house no. 300, ashok vihar
    </p>
  </div>
</div>
        </div>
      </div>
      
    
  )
}

export default Listing