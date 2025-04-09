import React from 'react'
import { bgheader, bghero, rightplay } from '../assets'
import Button from './Button'

const Hero = () => {
    return (
        <>
        
            <div className='main-container text-white items-center h-150  px-1.5 '>
            <img src={bghero} alt="" className='-z-10 absolute left-0 right-0  w-full ' />
            <img src={bgheader} alt="" className='-z-11 absolute left-0 right-0 w-full h-full object-cover' />
              
                <h2 className="text-[64px] pt-15 mt-15  w-[67%] font-bold bg-linear-to-r/srgb from-indigo-100 to-teal-200 bg-clip-text text-transparent">What is Shark trading</h2>

              
                <p className='text-[20px] w-[56%] py-5'>Lorem ipsum odor amet, consectetuer adipiscing met vel parturient nostra
                    aptent.Lorem ipsum odor amet, consectetuer elit. Amet vel parturient
                    nostra aptent. .Lorem ipsum odor amet, consectetuer  elit.</p>
                   <div className='py-7'>
                   <Button title="Become an investor" text={"text-[black] hover:text-white text-[16px] max-[573px]:text-[15px] max-[481px]:text-[13px] max-[455px]:text-[11px] "} color={"bg-mainBlue hover:bg-[black]"} icon={rightplay} bg={"bg-[black]"} border={" border-[1px] border-mainBlue hover:border-white"} />
                   </div>
            </div>
        </>
    )
}

export default Hero
