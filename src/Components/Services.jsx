import React from 'react'
import Accardion from './Accardion'
import { bgservice, bgservices } from '../assets'

const Services = () => {
  return (
    <>
    <img src={bgservice} alt="" className='-z-10    absolute left-0 right-0  w-full ' />
    <img src={bgservices} alt="" className='-z-11 absolute left-0 right-0 w-full h-full object-cover' />
    <div className='main-container'>
      <h2 className="text-[64px]  mt-15  w-[67%] max-[996px]:w-[70%]  max-[897px]:w-[100%]   max-[996px]:text-[60px]  max-[875px]:text-[50px] max-[632px]:text-[40px] max-[573px]:text-[35px] max-[536px]:text-[30px] max-[50px]:text-[27px] font-bold bg-linear-to-r/srgb from-indigo-100 to-teal-200 bg-clip-text text-transparent">Our Services</h2>
      <p className='text-[20px] text-white w-[56%] max-[1180px]:w-[57%] max-[897px]:w-[80%] max-[631px]:w-[85%] max-[875px]:text-[19px]  max-[632px]:text-[17px]  max-[574px]:text-[16px] max-[536px]:text-[15px]  max-[500px]:text-[14px] max-[831px]:w-[82%] max-[897px]:mx-auto py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>
      <Accardion/>
    </div>
    </>
  )
}

export default Services
