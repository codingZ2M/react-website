import React from 'react'

const HeroBanner = () => {
  return (
    <div className='flex items-center justify-center mt-0'>
      <img  className='w-full h-[500px] sm:h-[800px] object-cover brightness-100 '
       src="https://images.unsplash.com/photo-1575571458835-600ee8cb1972?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"/>
      
      <div className="absolute  top-32 sm:top-72 sm:left-48  z-1 text-[#15153D] flex flex-col gap-12">
       <div className='flex flex-col gap-2 sm:gap-4'>
        <h3 className='text-3xl sm:text-7xl'>Summer Sale & Collections</h3>
        <p className='w-72 sm:w-full text-lg  sm:text-3xl'>Gadgets Collections - Special Offers & Discounts</p>
       </div>
       <div className='flex flex-col gap-0 sm:gap-2'>
        <p className='text-3xl sm:text-5xl'>30% Off</p>
        <p className='text-lg sm:text-2xl'>15th Jan 2023</p>
        <button className='hidden sm:flex items-center justify-center mt-10 w-60 text-white font-medium border-2 border-[#15153D] px-8 py-3
                             bg-[#15153D] rounded-full hover:bg-white hover:text-[#15153D] hover:border-[#15153D]'>
                 SHOP NOW
        </button>
      </div>
      </div>
      
    </div>
  )
}

export default HeroBanner