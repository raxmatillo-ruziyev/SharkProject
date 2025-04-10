import React from 'react'
import { navbarData } from '../data'
import { bgheader, logo } from '../assets/index';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  return (
    <div className='main-container flex justify-between items-center py-[30px] text-[15px] ' >
      <img src={bgheader} alt="" className='-z-10 absolute inset-0 w-full' />
      <a  href="./home"><img src={logo} alt="" className='w-20 h-19  max-[690px]:w-19 max-[690px]:h-17 max-[510px]:w-17 max-[510px]:h-15 ' /></a>
      <div className='flex items-center gap-9  max-[780px]:hidden  mx-auto'>
        {navbarData.map((item) => (
          <a  className=" text-white hover:text-mainBlue text-white cursor-pointer font-medium transition-colors duration-300" href="#" key={item.id}>{item.text}</a>
        ))}
      </div>
      <button className='text-white text-[25px] p-2 hover:text-mainBlue text-white cursor-pointer font-medium transition-colors duration-300'> <RxHamburgerMenu /></button>
    </div>
  )
}

export default Navbar
