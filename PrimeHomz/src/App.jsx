import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Listing from './component/Listing'
import Articles from './component/Articles'
import Footer from './component/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Listing/>
      <Articles/>
      <Footer/>
    </div>
  )
}

export default App