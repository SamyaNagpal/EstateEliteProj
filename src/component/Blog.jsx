import React from 'react'

const Blog = () => {
  return (
    <div className='BG min-h-[145vh] m-15 mt-32'>
  <div className="space-y-3">
    <h1 className="text-6xl text-blue-950 text-center pt-5">Blog Posts</h1>
    <h2 className="text-xl text-gray-500 text-center">
      Connecting you with the perfect property for every need
    </h2>
  </div>

  <div className="grid grid-cols-3 gap-8 my-5 px-40">
    {/* Card 1 */}
    <div className="w-full h-[60vh] bg-white rounded-2xl p-6">
      <div className="overflow-hidden rounded-2xl">
        <img
          className="w-full h-60 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          src="blog1.avif"
          alt="AI Business"
        />
      </div>
      <h1 className="text-2xl mt-9 ml-2">
        The Impact of AI on Modern Business Strategies
      </h1>
    </div>

    {/* Card 2 */}
    <div className="w-full h-[60vh] bg-white rounded-2xl p-6">
      <div className="overflow-hidden rounded-2xl">
        <img
          className="w-full h-60 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          src="blog2.avif"
          alt="Home Buying"
        />
      </div>
      <h1 className="text-2xl mt-9 ml-2">
        Your First Home: A Step-by-Step Buying Guide
      </h1>
    </div>

    {/* Card 3 */}
    <div className="w-full h-[60vh] bg-white rounded-2xl p-6">
      <div className="overflow-hidden rounded-2xl">
        <img
          className="w-full h-60 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          src="blog3.avif"
          alt="Rent vs Own"
        />
      </div>
      <h1 className="text-2xl mt-9 ml-2">
        Homeownership vs. Renting: Which One is Right?
      </h1>
    </div>

    {/* Card 4 */}
    <div className="w-full h-[60vh] bg-white rounded-2xl p-6">
      <div className="overflow-hidden rounded-2xl">
        <img
          className="w-full h-60 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          src="blog4.avif"
          alt="Step-by-step"
        />
      </div>
      <h1 className="text-2xl mt-9 ml-2">
        First Home: A Step-by-Step Buying Guide
      </h1>
    </div>

    {/* Card 5 */}
    <div className="w-full h-[60vh] bg-white rounded-2xl p-6">
      <div className="overflow-hidden rounded-2xl">
        <img
          className="w-full h-60 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          src="blog2.avif"
          alt="Smart Homes"
        />
      </div>
      <h1 className="text-2xl mt-9 ml-2">
        Future of Smart Homes: Trends for 2025
      </h1>
    </div>

    {/* Card 6 */}
    <div className="w-full h-[60vh] bg-white rounded-2xl p-6">
      <div className="overflow-hidden rounded-2xl">
        <img
          className="w-full h-60 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          src="blog5.avif"
          alt="Sustainable Architecture"
        />
      </div>
      <h1 className="text-2xl mt-9 ml-2">
        The Rise of Sustainable Architecture in Urban Design
      </h1>
    </div>
  </div>
</div>
  )
}

export default Blog