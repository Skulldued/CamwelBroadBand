import React from 'react'
import contact from "../assets/contact.jpg";
import { Helmet } from "react-helmet";
import ccc from "../assets/ccc.png";
const Contact = () => {
  return (
    <div className='w-full'>
       <Helmet>
        <title>Contact</title>
      </Helmet>
       <div>
        <img src={contact} className='w-full' alt="" />
       </div>
       <div className='max-w-[1240px] mx-auto py-16 px-4
       '>
         <div className='grid md:grid-cols-2 mx-auto'>
              <div className='flex justify-center'>
                <img src={ccc} alt="" />
              </div>
              <div className='address flex justify-center w-full'>
                  <form action="" method='post' className='rounded border w-full p-8'>
                    <div className='flex flex-col'>
                      <label htmlFor="">Name</label>
                      <input type="text" className=' p-2 my-2 rounded-sm focus:border-red-400 border border-sky-600' />
                    </div>
                    <div className='flex flex-col'>
                      <label htmlFor="">Email</label>
                      <input type="email" className='p-2 my-2 rounded-sm focus:border-red-400 border border-sky-600' />
                    </div>
                    <div className='flex flex-col'>
                      <label htmlFor="">Phone Number</label>
                      <input type="text" className='p-2 my-2 rounded-sm focus:border-red-400 border border-sky-600' />
                    </div>
                    <div className='flex flex-col'>
                      <label htmlFor="">Address</label>
                      <input type="text" className='p-2 my-2 rounded-sm focus:border-red-400 border border-sky-600' />
                    </div>
                    <div className='py-2 flex justify-center'>
                      <button type='submit' className='bg-blue-600 px-20 py-2 text-white font-bold rounded-md' name='submit'>Submit</button>
                    </div>
                  </form>
              </div>
         </div>
       </div>
    </div>
  )
}

export default Contact
