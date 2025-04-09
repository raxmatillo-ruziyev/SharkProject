import React from 'react'
import { bgheader, bghero, rightplay } from '../assets'
import Button from './Button'

const Hero = () => {
    return (
        <>

            <div className='main-container text-white items-center h-150 max-[900px]:h-120 max-[573px]:h-110  px-1.5   max-[897px]:text-center '>
                <img src={bghero} alt="" className='-z-10 absolute left-0 right-0  w-full ' />
                <img src={bgheader} alt="" className='-z-11 absolute left-0 right-0 w-full h-full object-cover' />

                <h2 className="text-[64px] pt-15 mt-15  w-[67%] max-[996px]:w-[70%]  max-[897px]:w-[100%]   max-[996px]:text-[60px]  max-[875px]:text-[50px] max-[632px]:text-[40px] max-[573px]:text-[35px] max-[536px]:text-[30px] max-[50px]:text-[27px] font-bold bg-linear-to-r/srgb from-indigo-100 to-teal-200 bg-clip-text text-transparent" >What is Shark trading</h2>


                <p className='text-[20px] w-[56%] max-[1180px]:w-[57%] max-[897px]:w-[80%] max-[631px]:w-[85%] max-[875px]:text-[19px]  max-[632px]:text-[17px]  max-[574px]:text-[16px] max-[536px]:text-[15px]  max-[500px]:text-[14px] max-[831px]:w-[82%] max-[897px]:mx-auto py-5'>Lorem ipsum odor amet, consectetuer adipiscing met vel parturient nostra
                    aptent.Lorem ipsum odor amet, consectetuer elit. Amet vel parturient
                    nostra aptent. .Lorem ipsum odor amet, consectetuer  elit.</p>
                <div className='py-7 max-[897px]:flex justify-center'>
                    <Button title="Become an investor" text={"text-[black] hover:text-white text-[16px] max-[573px]:text-[15px] max-[481px]:text-[13px] max-[455px]:text-[11px] "} color={"bg-mainBlue hover:bg-[black]"} icon={rightplay} bg={"bg-[black]"} border={" border-[1px] border-mainBlue hover:border-white"} />
                </div>
            </div>
        </>
    )
}

export default Hero
