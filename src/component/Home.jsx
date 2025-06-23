import React from 'react'
import { Star } from 'lucide-react'
import Listing from './Listing'
import WhyChoose from './WhyChoose'
import Articles from './Articles'
import Blog from './Blog'
import About from './About'
import Remarkable from './remarkable'

const Home = () => {
  return (
    <div className="pt-23">
      {/* Background Section */}
      <div className="h-[95vh] w-[95vw] mx-[2vw] bg-gray-600 rounded-2xl bg-[url(https://cdn.prod.website-files.com/6814fd6e7e1d7b88832c570c/681f30291cb42df385279ff2_property02.webp)] bg-cover bg-no-repeat bg-[center_42%] pt-35"> 
        
        {/* Content Block */}
        <div className="h-[50vh] w-[48vw] space-y-4 ml-14">
          
          {/* Badge */}
          <p className="uppercase p-2 bg-white/20 backdrop-blur-xs w-[13vw] rounded-3xl border border-white text-white">
            award-winning firm
          </p>

          {/* Headings */}
          <h1 className="text-white font-[montserrat] text-6xl font-medium tracking-tight">
            <span className="font-[windsong]">Creating</span> Spaces That
          </h1>
          <h1 className="text-white font-[montserrat] text-6xl font-medium tracking-tight">
            Inspire Modern World
          </h1>

          {/* Description */}
          <p className="text-white/90 text-xl tracking-tight font-[montserrat]">
            Award-winning architectural design firm specializing in creating
            innovative and sustainable spaces that transform how people live,
            work, and play.
          </p>

          {/* Buttons */}
          <div>
            <button className="px-3 py-3 bg-white rounded-xl mt-3 text-sm font-[montserrat] font-medium">
              Explore Projects
            </button>
            <button className="px-3 py-3 bg-black/50 text-white text-sm font-[montserrat] ml-4 rounded-xl mt-3 font-medium">
              Get In Touch
            </button>
          </div>

          {/* Rating Section */}
          <div className="flex items-center font-[montserrat]">
            
            {/* Stars */}
            <div className="flex leading-tight items-center">
              <Star strokeWidth={0.5} className="text-white fill-white text-xs" />
              <Star strokeWidth={0.5} className="text-white fill-white text-xs" />
              <Star strokeWidth={0.5} className="text-white fill-white text-xs" />
              <Star strokeWidth={0.5} className="text-white fill-white text-xs" />
              <Star strokeWidth={0.5} className="text-white fill-white text-xs" />
            </div>

            {/* Divider & Text */}
            <h1 className="text-white text-3xl ml-3 font-thin">|</h1>
            <h1 className="text-white/90 text-xl ml-3 font-normal pt-0.5">
              Rated by loving Clients
            </h1>
          </div>
        </div>

      

      </div>
      <Listing/>
      <WhyChoose/>
      <Articles/>
      <Blog/>
      <About/>
      {/* <Contact/> */}
      <Remarkable/>
      
    </div>
  )
}

export default Home
