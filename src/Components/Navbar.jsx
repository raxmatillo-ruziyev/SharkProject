import React from 'react'
import { navbarData } from '../data'
import { bgheader, logo } from '../assets/index';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  return (
    <div className='main-container flex justify-between items-center py-8 text-[19px] max-[1000px]:text-[17px] max-[800px]:text-[16px] ' >
      <img src={bgheader} alt="" className='-z-10 absolute inset-0 w-full' />
      <a href="#"><img src={logo} alt="" className='w-20 h-19  max-[690px]:w-19 max-[690px]:h-17 max-[510px]:w-17 max-[510px]:h-15' /></a>
      <div className='flex items-center gap-9  max-[780px]:hidden  mx-auto'>
        {navbarData.map((item) => (
          <a className='text-white ' href="#" key={item.id}>{item.text}</a>
        ))}
      </div>
      <button className='text-white text-[25px] p-2'> <RxHamburgerMenu /></button>
    </div>
  )
}

export default Navbar
