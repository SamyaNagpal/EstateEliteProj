import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Listing from './component/Listing'
import Articles from './component/Articles'
import Footer from './component/Footer'

import WhyChoose from './component/WhyChoose'
import Contact from './component/Contact'
import About from './component/About'
import Remarkable from './component/remarkable'
import Blog from './component/Blog'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Listing/>
      <WhyChoose/>
      <Articles/>
      <Blog/>
      <About/>
      <Contact/>
      <Remarkable/>
      <Footer/>
    </div>
  )
}

export default App