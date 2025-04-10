import React from 'react'
import Button from './Button'
import { bgheader, leftline, leftplay, rightline, rightplay } from '../assets'

const Header = () => {
  return (
    <div className=' main-container  max-[700px]:py-0 py-15 text-white text-center '>
      <img src={bgheader} alt="" className='-z-10 absolute inset-0 w-full h-full object-cover' />
      <button className=' text-[16px] mt-20 mb-5 max-[700px]:text-[15px] max-[500px]:text-[14px] px-5 py-2 rounded-3xl bg-white/25 backdrop-invert backdrop-opacity-10 my-3 hover:cursor-pointer hover:bg-white/90 backdrop-invert backdrop-opacity-1 hover:text-mainBlue  transition-colors duration-300'>100% Transperent</button>
      <h2 className='text-[40px] w-[72%] mx-auto py-1 max-[1000px]:text-[37px] max-[875px]:text-[34px] max-[632px]:text-[31px] max-[573px]:text-[29px] max-[537px]:text-[27px] max-[500px]:text-[23px] max-[420px]:text-[20px] '>BUILD YOUR FUTURE WITH SHARK TRADING</h2>
      <p className='text-[20px] w-[434px] max-[500px]:w-[340px] max-[400px]:w-[250px] mx-auto py-2 max-[875px]:text-[19px] max-[632px]:text-[17px] max-[573px]:text-[16px] max-[537px]:text-[15px] max-[500px]:text-[14px]' >Lorem ipsum odor amet, consectetuer adipiscing  elit. Amet vel parturient nostra aptent  </p>
      <div className='flex gap-2 justify-center mb-[30px] py-10 max-[400px]:py-7'>
        <img src={rightline} alt="" className='max-[573px]:w-[70px]  max-[481px]:w-[65px] max-[455px]:w-[40px] max-[405px]:w-[20px]' />
        <Button title="Get started" text={"text-[black] hover:text-white text-[16px] max-[573px]:text-[15px] max-[481px]:text-[13px] max-[455px]:text-[11px] "} color={"bg-mainBlue hover:bg-[black]"} icon={rightplay} bg={"bg-[black]"} border={" border-[1px] border-mainBlue hover:border-white"} />
        <Button title="Our Story" text={"text-[white] hover:text-[black] text-[16px]  max-[573px]:text-[15px] max-[481px]:text-[13px] max-[455px]:text-[11px] "} color={"bg-[black] hover:bg-mainBlue"} icon={leftplay} bg={"bg-[black] hover:border-mainBlue"} border={"border hover:border-[1px] hover:border-mainBlue"} />
        <img src={leftline} alt="" className='max-[573px]:w-[70px]  max-[481px]:w-[65px] max-[455px]:w-[40px] max-[405px]:w-[20px]' />

      </div>
    </div>
  )
}

export default Header
