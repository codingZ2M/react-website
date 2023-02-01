import React from 'react'
import { Link } from 'react-router-dom';
import {HiOutlineShoppingBag} from "react-icons/hi";

const Footer = () => {
  return (
    <div className=' flex flex-col sm:flex-row gap-1 sm:gap-12 items-center justify-center relative bottom-0 left-0 right-0 
    sm:h-32 h-60 z-10 bg-black text-white text-sm'>
        <span className='  text-small text-white cursor-pointer'>CZ2M SHOPPING</span>
        <Link to = "/">HOME</Link>
        <Link to= "/">SIGNIN</Link>
        <Link to= "/">LOGIN</Link>
        <Link to= "/">
            <HiOutlineShoppingBag className='w-6 h-6 cursor-pointer pt-0' />
        </Link>
        <span className='mt-6 sm:mt-0'>© 2022 by CODINGZ2M</span>
   </div> 
  )
}

export default Footer

