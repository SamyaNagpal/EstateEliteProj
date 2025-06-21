import React from 'react'

const Homepage = () => {
  return (
    <div className='flex items-center justify-center'>
        <div className='space-y-5 flex flex-col justify-center items-center'>
            <h1 className='text-5xl font-extrabold text-center'>India's Most-loved <br /> Payments App</h1>
            <h2 className='text-3xl text-center font-'>Recharge & pay bills, book flights & movie tickets, open a <br /> savings account, invest in stocks & mutual funds, and do a lot more.</h2>
            <button className='bg-black text-amber-50 w-fit px-6 py-3 rounded-3xl'>Download Paytm App</button>
        </div>
        <div>
          <img className='mt-32' src="payment.webp" alt="payment image" />
        </div>
    </div>
  )
}

export default Homepage