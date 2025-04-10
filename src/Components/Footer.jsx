import React from 'react'
import Button from './Button'
import { rightplay } from '../assets'
import { links } from '../data'

const Footer = () => {
    return (
       <div className='bg-gray-950'>
        <div className='main-container'>
            <h2 className='text-[48px]  py-5 font-bold bg-linear-to-r/srgb from-indigo-100 to-teal-200 bg-clip-text text-transparent text-center max-[996px]:w-[72%]  max-[897px]:w-[100%]   max-[996px]:text-[55px]  max-[996px]:mx-auto  max-[875px]:text-[50px] max-[632px]:text-[40px] max-[573px]:text-[35px] max-[536px]:text-[30px] max-[50px]:text-[27px]'> Let’s Connect with Shark Trading</h2>
            <label className='flex justify-between p-1.5 my-3 rounded-3xl text-white text-[17px] max-[700px]:text-[14px] border-white border-[1px] bg-[black] w-[431px] max-[700px]:w-[90%] mx-auto ' >
                <input type="text" placeholder='Shark Trading' />
                <Button title="Submit" text={"text-[black] hover:text-white text-[16px] max-[573px]:text-[15px] max-[481px]:text-[13px] max-[455px]:text-[11px] "} color={"bg-mainBlue hover:bg-[black]"} icon={rightplay} bg={"bg-[white]"} border={" border-[1px] border-mainBlue hover:border-white"} />
            </label>
            <div className='flex justify-between item-center py-20 px-1.5 max-[478px]:flex-col'>
                <div className='text-white w-[40%] max-[1000px]:w-[35%] max-[900px]:w-[25%] max-[478px]:w-[100%] '>
                    <h4 className='text-[20px]  max-[778px]:text-[18px] max-[529px]:text-[16px]  max-[478px]:text-[20px] py-3'>SharkTrading</h4>
                    <p className='text-[14px]  w-[50%] max-[478px]:w-[100%] max-[478px]:text-[16px] max-[1000px]:w-[70%] py-1'>Join us to shape your future of
                    trader or invester</p>
                </div>
                <div className='text-white  w-[60%] max-[1000px]:w-[65%] max-[900px]:w-[75%] max-[478px]:w-[100%]  '>
                    <ul className='grid grid-cols-4 max-[600px]:grid-cols-3  max-[359px]:grid-cols-2 gap-5'>
                        <li>
                            <h4 className='text-[20px]  max-[778px]:text-[18px] max-[529px]:text-[16px]  py-3'>PRODUCT</h4> 
                            <a className='text-[14px]   max-[778px]:text-[13px] max-[529px]:text-[12px] py-2' href="#">FEATURES</a> <br />
                            <a className='text-[14px]   max-[778px]:text-[13px] max-[529px]:text-[12px] py-2' href="#">PRICING</a>
                        </li>
                        <li>
                            <h4 className='text-[20px]  max-[778px]:text-[18px] max-[529px]:text-[16px]  py-3'>CONTACT US</h4>
                            <a className='text-[14px]   max-[778px]:text-[13px] max-[529px]:text-[12px] py-2' href="#">COURCES</a>
                        </li>
                        <li>
                            <h4 className='text-[20px]  max-[778px]:text-[18px] max-[529px]:text-[16px]  py-3'>RISK POLICY</h4>
                            <a className='text-[14px]   max-[778px]:text-[13px] max-[529px]:text-[12px] py-2' href="#">PRIVACY POLICY</a> <br />
                            <a className='text-[14px]   max-[778px]:text-[13px] max-[529px]:text-[12px] py-2' href="#">COOKIE POLICY</a>
                        </li>
                        <li className='mx-auto max-[600px]:w-[280px]  max-[359px]:w-[140px] max-[478px]:w-[300px] max-[478px]:mx-auto '>
                            <h4 className='text-[20px]  max-[778px]:text-[18px] max-[529px]:text-[16px]  py-3 '>LINKS</h4>
                            <div className='grid grid-cols-2  max-[600px]:grid-cols-6  max-[359px]:grid-cols-3  mx-auto gap-2 w-20 max-[600px]:w-[280px] max-[359px]:w-[140px]'>
{links.map((item)=>(
 <img className='hover:scale-150  transition-colors duration-300' src={item.img} alt="" />
))
   
}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
       </div>
    )
}

export default Footer
