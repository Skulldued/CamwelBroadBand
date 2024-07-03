import React from 'react'

const CardCctv = ({image,title,description}) => {
  return (
    <div className='max-w-[400px] '>
        <div className='border p-5 hover:border-sky-900 duration-300 hover:shadow-2xl rounded-xl'>
          <div className='flex justify-center '>
            <img src={image} alt="" className='rounded-lg ' />
          </div>
          <div className='py-2 '>
            <h3 className='text-red-600 text-2xl font-bold text-center'>{title}</h3>
          </div>
          <div className="py-2">
            <p className="text-justify">
           {description}
            </p>
          </div>
        </div>
    </div>
  )
}

export default CardCctv
