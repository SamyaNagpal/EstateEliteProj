import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Listing from './component/Listing'
import Articles from './component/Articles'
import Footer from './component/Footer'
import AboutUs from './component/AboutUs'
import WhyChoose from './component/WhyChoose'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Listing/>
      <WhyChoose/>
      <Articles/>
      <Footer/>
    </div>
  )
}

export default App