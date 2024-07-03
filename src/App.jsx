import React from 'react'
import Navbar from './Component/Navbar'
import Navbarbottom from './Component/Navbarbottom'
import Home from './Pages/Home'
import Footer from './Component/Footer'
import About from './Pages/About'
import Broadband_plan from "./Pages/Broadband_plan";
import Computer_laptop from "./Pages/Computer_laptop";
import Contact from "./Pages/Contact";
import Cctv from "./Pages/Cctv";
import { Routes,Route } from 'react-router-dom';
const App = () => {
  return (
    <div className='w-full bg-black '>
      <Navbar/>
      <Navbarbottom/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/broadbandplan' element={<Broadband_plan/>} />
      <Route path='/computer_laptop' element={<Computer_laptop/>} />
      <Route path='/cctv' element={<Cctv/>} />
      <Route path='/contact' element={<Contact/>}/>
     </Routes>
      <Footer/>
    </div>
  )
}

export default App
