import React from 'react'

const Home = () => {
  return (
    <div className='h-screen w-screen flex-col pl-8'>
        <div>
        <p className='text-8xl  pt-14 font-medium text-gray-800 tracking-wide'>
            Find the 
            <span className='font-span'>Home</span> 
             <br/>
             That Finds You</p>
        </div>
        <div className=' home mt-15 h-110 flex p-3 text-left gap-x-18'>
            <div className='h-95 w-155'>
                <img src="https://cdn.prod.website-files.com/6814fc6232b8cad8fad482b3/6824284de789999fbdfc417d_Hero%20Thumb.webp" alt="" />
            </div >
            <div>
                <p>101 Dallas Street,<br/>
                 Chicago, USA <br/>
                 1002
                 </p>
                 </div>
            <div className='mx-14'>
        <span className=' font-bold  '>  DE <br />
              COLORADO <br/></span>   
                Discover a world where each <br />
                architectural marvel & every opulent<br />
                interior come to life. Welcome to<br />
                the height of luxury real estate, where<br />
                 your dreams find their home<br />  
            </div>
        </div>
    </div>
  )
}

export default Home