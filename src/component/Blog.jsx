import React from 'react'

const Blog = () => {
  return (
    <div className='BG min-h-[145vh] m-15 mt-32'>
  <div className="space-y-3">
    <h1 className="text-6xl  text-center pt-5">Posts</h1>
    <h2 className="text-xl  text-center">
      Connecting you with the perfect property for every need
    </h2>
  </div>

  <div className="grid grid-cols-3 gap-8 my-5 px-40">
    {/* Card 1 */}
    <div className="w-full h-[60vh] bg-white rounded-2xl p-6">
      <div className="overflow-hidden rounded-2xl">
        <img
          className="w-full h-60 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          src="https://primehomz.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-07-23-at-3.23.50-PM-pvykfkanj4j0vxdimuhlrzrlxr7lr17vdnxiklm4w0.jpeg"
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
          src="https://primehomz.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-07-23-at-3.23.50-PM-pvykfkanj4j0vxdimuhlrzrlxr7lr17vdnxiklm4w0.jpeg"
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
          src="https://primehomz.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-07-23-at-3.23.50-PM-pvykfkanj4j0vxdimuhlrzrlxr7lr17vdnxiklm4w0.jpeg"
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
          src="https://primehomz.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-07-23-at-3.23.50-PM-pvykfkanj4j0vxdimuhlrzrlxr7lr17vdnxiklm4w0.jpeg"
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
          src="https://primehomz.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-07-23-at-3.23.50-PM-pvykfkanj4j0vxdimuhlrzrlxr7lr17vdnxiklm4w0.jpeg"
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
          src="https://primehomz.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-07-23-at-3.23.50-PM-pvykfkanj4j0vxdimuhlrzrlxr7lr17vdnxiklm4w0.jpeg"
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