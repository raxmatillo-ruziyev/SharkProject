import React from 'react'
import FinanceCard from './FinanceCard'
import {  bgservice, rightplay } from '../assets'
import Button from './Button'

const Finance = () => {
  return (
    <div className='bg-gray-950'>
        <img src={bgservice} alt="" className='-z-11    absolute left-0 right-0  w-full h-full' />

      <div className='main-container  max-[700px]:py-0 py-15'>
        <h2 className='text-[48px]  py-5 font-bold bg-linear-to-r/srgb from-indigo-100 to-teal-200 bg-clip-text text-transparent text-center max-[996px]:w-[72%]  max-[897px]:w-[100%]   max-[996px]:text-[55px]  max-[996px]:mx-auto  max-[875px]:text-[50px] max-[632px]:text-[40px] max-[573px]:text-[35px] max-[536px]:text-[30px] max-[50px]:text-[27px]'>Our view of the new financial world </h2>
       <FinanceCard/>
        <div className='mx-auto flex justify-center py-5'>
          <Button title="Learn more" text={"text-[black] hover:text-white text-[16px] max-[573px]:text-[15px] max-[481px]:text-[13px] max-[455px]:text-[11px] "} color={"bg-mainBlue hover:bg-[black]"} icon={rightplay} bg={"bg-[black]"} border={" border-[1px] border-mainBlue hover:border-white"} />
        </div>
       
      </div>
      
    </div>
  )
}

export default Finance
