import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {AiOutlineMenu}  from "react-icons/ai";
import {HiOutlineShoppingBag} from "react-icons/hi";

const NavBar = () => {

  return (
    <div className='w-full bg-white text-[#15153D] uppercase text-sm'>
       
        <div className='flex items-center justify-between p-5 max-w-screen-2xl mx-auto'>
            <Link to="/">
                <span className='text-[#15153D] text-lg sm:text-2xl font-normal'>CZ2M Shopping</span>
            </Link>
            <div className='flex gap-12 items-center justify-center'>
                <div className='hidden sm:flex gap-4 items-center justify-center'>
                    <Link to = {`/productCategory/speakers`} >SPEAKERS</Link>
                    <Link to= {`/productCategory/headphones`}>HEADPHONES</Link>
                    <Link to= "/">CAMERAS</Link>
                    <Link to= "/">SMART WATCHES</Link>
                </div> 

                <div className='hidden sm:flex gap-4 items-center justify-center'>
                    <Link to = "/">Home</Link>
                    <Link to= "/">Sign In</Link>
                    <button className='text-white bg-[#15153D] font-medium border-2 border-[#fff] px-4 sm:px-6 py-1 sm:py-1.5
                              rounded-full hover:bg-white hover:text-[#15153D] hover:border-[#15153D]'>
                        Login
                    </button>
                </div>       
                <div className='relative flex gap-8  items-center justify-center'>
                    <div onClick="" className="cursor-pointer">
                        <HiOutlineShoppingBag className='w-6 h-6 cursor-pointer pt-0' />               
                        <div className=' bg-[#15153D] text-white absolute top-[-2px] left-28 sm:left-[14px] w-5 h-5 rounded-full 
                                    flex item-center justify-center'>
                            <span className='text-sm'> 0 </span>
                        </div>
                    </div>
                    <Link to = "#">
                        <AiOutlineMenu className='text-[#15153D] w-8 h-8 cursor-pointer pt-0 '/>
                    </Link>
               </div>
          </div>   
      </div>   
    </div>
  )
}

export default NavBar











