import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Footer from './component/Footer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Properties from './pages/Properties'
import Contact from './pages/Contact'
import Services from './pages/Services'
import PropertyDetails from "./pages/PropertyDetails";
import About from "./pages/About";

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
           <Navbar/>
      
      <Routes>     
      <Route path="/" element={<Home/>} />
      <Route path="/properties" element={<Properties/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/property-details" element={<PropertyDetails />} />
      <Route path="/properties/:id" element={<PropertyDetails />} />
      <Route path="/about" element={<About />} />
         
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App