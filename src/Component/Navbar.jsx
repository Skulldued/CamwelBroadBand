import React from 'react'
import { IoMdCall } from "react-icons/io";
import { FaFacebook,FaInstagram,FaTwitter   } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className='w-full bg-[#252A43] h-[40px] md:flex hidden text-white flex-row justify-between px-24 items-center'>
      <div className=''>
       <a href="tel:+91 9199044666 ,+91 8434583494" className='mb-0 flex items-center gap-5 text-[16px]'>
       <IoMdCall/> 
       +91 9199044666 ,+91 8434583494
       </a>
      </div>
      <div className='flex gap-5'>
       <a href="tel:+91 9199044666 ,+91 8434583494" className='mb-0  flex items-center gap-3 text-[16px]'>
       <FaFacebook/> 
       </a>
       <a href="tel:+91 9199044666 ,+91 8434583494" className='mb-0 flex items-center gap-3 text-[16px]'>
       <FaInstagram/> 
       </a>
       <a href="tel:+91 9199044666 ,+91 8434583494" className='mb-0 flex items-center gap-3 text-[16px]'>
       <FaTwitter/> 
       </a>
      </div>
    </div>
  )
}

export default Navbar
