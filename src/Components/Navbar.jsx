import React from 'react'
import { navbarData } from '../data'

const Navbar = () => {
  return (
    <div className='main-container'> 
    
      {navbarData.map((item)=>(
        <p key={item.id}>{item.text}</p>
      ))}
    </div>
  )
}

export default Navbar
