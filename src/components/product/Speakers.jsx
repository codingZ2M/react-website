import React from 'react'
import { useParams } from 'react-router-dom'
import {BsCart2} from "react-icons/bs";

const Speakers = () => {
    const {category} = useParams();

  return (
    <div className='w-full'>
    <div className='flex items-center justify-start max-w-screen-2xl mx-auto mt-6 pl-6 sm:pl-0'>
      <h2 className='text-xl uppercase'>Speakers</h2>
    </div>
    <div className='grid gap-2 sm:gap-12 
            grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 max-w-screen-2xl mx-auto mt-6 mb-20'>
        <div className='flex flex-col gap-3 items-center justify-center border-2 pt-0 pb-6'>
            <img src="https://images.unsplash.com/photo-1507878566509-a0dbe19677a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"  
                    width={334} height={500}/>
            <div className='flex items-center justify-center flex-col gap-1 mt-2'>
                <span className='w-72 px-4 uppercase text-sm font-normal overflow-hidden text-ellipsis whitespace-nowrap '>Bluetooth Noise Cancellation Headphone</span>
                <span className='text-sm font-semibold'>$59.00</span>
                <div className='flex gap-2'>
                 <BsCart2 className=' w-4 h-4 cursor-pointer'/>
                 <span className='text-xs cursor-pointer'>ADD TO CART</span> 
               </div>
            </div>
        </div>

        <div className='flex flex-col gap-3 items-center justify-center border-2 pt-0 pb-6'>
            <img src="https://images.unsplash.com/photo-1552252210-2e1dca567ae6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"  width={334} height={500}/>
            <div className='flex items-center justify-center flex-col gap-1 mt-2'>
                <span className='w-72 px-4 uppercase text-sm font-normal overflow-hidden text-ellipsis whitespace-nowrap '>Bluetooth Noise Cancellation Headphone</span>
                <span className='text-sm font-semibold'>$59.00</span>
                <div className='flex gap-2'>
                 <BsCart2 className=' w-4 h-4 cursor-pointer'/>
                 <span className='text-xs cursor-pointer'>ADD TO CART</span> 
               </div>
            </div>
        </div>

        <div className='flex flex-col gap-3 items-center justify-center border-2 pt-0 pb-6'>
            <img src="https://images.unsplash.com/photo-1558755982-60df5c86537f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"  width={334} height={500}/>
            <div className='flex items-center justify-center flex-col gap-1 mt-2'>
                <span className='w-72 px-4 uppercase text-sm font-normal overflow-hidden text-ellipsis whitespace-nowrap '>Bluetooth Noise Cancellation Headphone</span>
                <span className='text-sm font-semibold'>$59.00</span>
                <div className='flex gap-2'>
                 <BsCart2 className=' w-4 h-4 cursor-pointer'/>
                 <span className='text-xs cursor-pointer'>ADD TO CART</span> 
               </div>
            </div>
        </div>

        <div className='flex flex-col gap-3 items-center justify-center border-2 pt-0 pb-6'>
            <img src="https://images.unsplash.com/photo-1637175429892-22a433e8c04f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"  width={334} height={500}/>
            <div className='flex items-center justify-center flex-col gap-1 mt-2'>
                <span className='w-72 px-4 uppercase text-sm font-normal overflow-hidden text-ellipsis whitespace-nowrap '>Bluetooth Noise Cancellation Headphone</span>
                <span className='text-sm font-semibold'>$59.00</span>
                <div className='flex gap-2'>
                 <BsCart2 className=' w-4 h-4 cursor-pointer'/>
                 <span className='text-xs cursor-pointer'>ADD TO CART</span> 
               </div>
            </div>
        </div>
     
    </div>
  </div>
  )
}

export default Speakers