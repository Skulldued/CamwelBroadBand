import React from 'react'

const Card = ({image,title,descrption}) => {
  return (
    <div>
      <div className='max-w-[450px] bg-[#262451] hover:bg-transparent hover:border-sky-600 border-2 py-10 px-6 rounded-t-md border-yellow-400'>
          <div className='flex justify-center py-4'>
          <div className='bg-transparent w-[110px] h-[110px] hover:border-green-400 flex justify-center items-center rounded-full border-2 border-dashed '>
            <img src={image} alt={image} className='p-3 w-[100px]' />
           </div>
          </div>
           <div>
             <h2 className='font-bold text-center'>{title}</h2>
           </div>
           <div>
             <h2 className='text-center'>{descrption}</h2>
           </div>
      </div>
    </div>
  )
}

export default Card
