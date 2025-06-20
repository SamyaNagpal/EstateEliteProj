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
          <p className='text-8xl text-black mt-20 ml-10 '>
         <span className='font-span' >choosen</span>  properties</p>
          </div>
        <div className='flex  gap-7 mt-18 px-20 '>
          <FaArrowLeft className='w-20 h-13 font-500  rounded-full border border-black' />
          <FaArrowRight className='w-20 h-13 font-light rounded-full border border-black' />
        </div>
      
      </div>
      <div className='grid grid-cols-3 cursor-pointer px-5 h-140'>
        <div className='h-100 w-full'>
          <img className='h-full w-full' src="https://cdn.prod.website-files.com/6814fd6e7e1d7b88832c570c/681f30291cb42df385279ff2_property02.webp" alt="" />
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
      <h3 class="text-2xl font-semibold text-[#323628]">Cedar Grove</h3>
      <button class="border border-[#d2d2c6] rounded-full px-4 py-1 text-sm font-medium text-[#323628] hover:bg-[#e9e9dc] transition">
        VIEW
      </button>
    </div>
    <p class="text-sm text-gray-600">
      $300,000 • Cedar Lane 78, San Francisco
    </p>
       </div>
        </div>
        <div className='h-100 w-full'>
          <img  src="https://cdn.prod.website-files.com/6814fd6e7e1d7b88832c570c/6822f34fb301a0079eed1ae6_property03.webp" alt="" />
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
      <h3 class="text-2xl font-semibold text-[#323628]">Cedar Grove</h3>
      <button class="border border-[#d2d2c6] rounded-full px-4 py-1 text-sm font-medium text-[#323628] hover:bg-[#e9e9dc] transition">
        VIEW
      </button>
    </div>
    <p class="text-sm text-gray-600">
      $300,000 • Cedar Lane 78, San Francisco
    </p>
  </div>
</div>
        <div className='h-100 w-full'>
          <img src="https://cdn.prod.website-files.com/6814fd6e7e1d7b88832c570c/6822f4845fb1ff94d8c7ecc7_property04.webp" alt="" />
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
      <h3 class="text-2xl font-semibold text-[#323628]">Cedar Grove</h3>
      <button class="border border-[#d2d2c6] rounded-full px-4 py-1 text-sm font-medium text-[#323628] hover:bg-[#e9e9dc] transition">
        VIEW
      </button>
    </div>
    <p class="text-sm text-gray-600">
      $300,000 • Cedar Lane 78, San Francisco
    </p>
  </div>
</div>
        </div>
              <div className='grid grid-cols-3 cursor-pointer px-5 mb-26 h-100'>
        <div className='h-100 w-full'>
          <img className='h-full w-full' src="https://cdn.prod.website-files.com/6814fd6e7e1d7b88832c570c/681f30291cb42df385279ff2_property02.webp" alt="" />
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
      <h3 class="text-2xl font-semibold text-[#323628]">Cedar Grove</h3>
      <button class="border border-[#d2d2c6] rounded-full px-4 py-1 text-sm font-medium text-[#323628] hover:bg-[#e9e9dc] transition">
        VIEW
      </button>
    </div>
    <p class="text-sm text-gray-600">
      $300,000 • Cedar Lane 78, San Francisco
    </p>
       </div>
        </div>
        <div className='h-100 w-full'>
          <img  src="https://cdn.prod.website-files.com/6814fd6e7e1d7b88832c570c/6822f34fb301a0079eed1ae6_property03.webp" alt="" />
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
      <h3 class="text-2xl font-semibold text-[#323628]">Cedar Grove</h3>
      <button class="border border-[#d2d2c6] rounded-full px-4 py-1 text-sm font-medium text-[#323628] hover:bg-[#e9e9dc] transition">
        VIEW
      </button>
    </div>
    <p class="text-sm text-gray-600">
      $300,000 • Cedar Lane 78, San Francisco
    </p>
  </div>
</div>
        <div className='h-100 w-full'>
          <img src="https://cdn.prod.website-files.com/6814fd6e7e1d7b88832c570c/6822f4845fb1ff94d8c7ecc7_property04.webp" alt="" />
       <div class="p-4 space-y-3 w-fit">
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
      <h3 class="text-2xl font-semibold text-[#323628]">Cedar Grove</h3>
      <button class="border border-[#d2d2c6] rounded-full px-4 py-1 text-sm font-medium text-[#323628] hover:bg-[#e9e9dc] transition">
        VIEW
      </button>
    </div>
    <p class="text-sm text-gray-600">
      $300,000 • Cedar Lane 78, San Francisco
    </p>
  </div>
</div>
        </div>
      </div>
      
    
  )
}

export default Listing