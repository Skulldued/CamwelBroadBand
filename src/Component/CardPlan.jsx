import React from 'react'

const CardPlan = ({title,number,month,price}) => {
  return (
    <div>
      <div className='border-[1px] rounded-xl  p-8 bg-transparent'>
          <div className=''>
            <h3 className='text-xl font-bold text-[#93FCF4]'>{title}</h3>
          </div>
          <div className='speed py-10'>
              <div className='flex justify-center'>
                <p className='font-bold text-yellow-400'>Upto</p>
                <h3 className='text-[35px] font-bold'>{number}</h3>
                <div className='flex items-end text-yellow-500 font-bold'>
                    <p>mbps</p>
                </div>
              </div>
          </div>
          <div className='flex justify-center'>
            <button className='bg-[#513E4A] rounded-full px-10 py-2'>Get Started</button>
          </div>
          <div className="plans flex flex-col gap-3 py-6">
        {month.map((month, index) => (
          <div key={index} className="plan flex justify-center gap-3 py-2">
            <div className="border border-sky-500 px-3 py-2 rounded-sm w-[100px]">
              <p className="text-center">{month}</p>
            </div>
            <div className="border border-sky-500 px-3 py-2 rounded-sm w-[100px]">
              <p className="text-center">{price[index]}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default CardPlan
