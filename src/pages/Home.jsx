import React from 'react'
import HeroBanner from '../components/HeroBanner'
import {FiSpeaker} from "react-icons/fi";
import {BsCamera} from "react-icons/bs";
import {FiHeadphones} from "react-icons/fi";
import {BsSmartwatch} from "react-icons/bs";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className=''>
        <HeroBanner/>
        
        <div className='mt-6 w-full h-60 bg-[#white] flex flex-col gap-6 sm:flex-row items-center justify-between sm:px-60'>
               <Link to={`/productCategory/speakers`} >
               <div className='flex flex-col gap-2 items-center justify-center'>
                    <FiSpeaker className='w-20 h-20 text-[#15153D]'/>
                    <span className='text-[#15153D] text-base uppercase'>Speakers</span>
                </div>
                </Link>
                <Link to={`/productCategory/headphones`} >
                <div className='flex flex-col gap-2 items-center justify-center'>
                    <FiHeadphones className=' w-20 h-20 text-[#15153D]'/>
                    <span className='text-[#15153D]  text-base uppercase'>Headphones</span>
                </div>
                </Link>
                <Link to={`/productCategory/cameras`} >
                <div className='flex flex-col gap-2 items-center justify-center'>
                    <BsCamera className='text-[#15153D]  w-20 h-20'/>
                    <span className='text-[#15153D]  text-base uppercase'>cameras</span>
                </div>
                </Link>
                <Link to={`/productCategory/smartwatches`} >
                <div className='flex flex-col gap-2 items-center justify-center'>
                    <BsSmartwatch className='text-[#15153D]  w-20 h-20'/>
                    <span className='text-[#15153D]  text-base uppercase'>Smart Watches </span>
                </div>
                </Link>
        </div>

        <div className="mt-96 sm:mt-0 w-full bg-[#FFFFFF]
                    flex flex-col sm:flex-row items-center justify-center text-[#15153D] ">
            <div className='mb-12 sm:mb-0 sm:pl-16 flex flex-col items-center sm:items-start justify-center space-y-8 w-full sm:w-1/2 p-0'>
                <span className="text-xl sm:text-4xl sm:font-normal">Ultimate Ears WONDER BOOM</span>
                    <p className='text-base w-3/4 text-justify'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </p>
                    <Link to={`/productCategory/speakers`}>
                    <span className='text-[#15153D] text-lg sm:text-2xl font-normal border-2 border-[#15153D] 
                                px-14 py-[10px]'>
                        Start Exploring 
                    </span>
                    </Link>
            </div>
            <div className='flex mt-4 sm:mt-0 flex-grow'>
                  <img src="https://images.unsplash.com/photo-1636829147637-6b88c84fb6e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
            </div>
        </div>
        
        <div className="mt-0 mb-12 sm:mt-0 w-full bg-[#FFFFFF]
                    flex flex-col sm:flex-row items-center justify-center text-[#15153D] ">
             <div className='flex mt-4 sm:mt-0 flex-grow'>
             <img src="https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
            </div>
            <div className='sm:pl-16 flex flex-col items-center sm:items-start justify-center space-y-8 w-full sm:w-1/2 p-0'>
                <span className="mt-4 text-xl sm:text-4xl sm:font-normal">Noise Cancellation Bluetooth Headset</span>
                    <p className='text-base w-3/4 text-justify'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </p>
                    <span className='text-[#15153D] text-lg sm:text-2xl font-normal border-2 border-[#15153D] 
                                px-14 py-[10px]'>
                        Start Exploring 
                </span>
            </div>
        </div>
  

    </div>
  )
}

export default Home