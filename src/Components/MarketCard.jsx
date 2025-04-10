import React from 'react'
import { marketCards } from '../data'

const MarketCard = () => {
  return (
    <div >
      <div className="grid grid-cols-3  py-5 mx-auto gap-3  max-[1127px]:grid-cols-2  max-[746px]:grid-cols-1" >
        {
          marketCards.map((item) => (
            <div className="border  mx-auto  border-gray-200  max-[1127px]:mx-auto rounded-2xl py-5 px-4 w-92 max-[1137px]:w-89 max-[1127px]:w-107 max-[897px]:w-89 max-[746px]:w-[90%] max-[745px]:h-103  max-[483px]:h-112 max-[745px]:text-center
          h-120 max-[1127px]:h-115  max-[897px]:h-107 text-center  bg-[black] hover:bg-gray-900 transition-colors duration-300" >

              <h2 className='text-white text-[27px] py-4   max-[745px]:text-center' >{item.title}</h2>
              <img className='mx-auto w-[280px] h-[200px] my-4  ' src={item.img} alt="" loading='lazy' />
              <p className='text-white text-[17px] pt-4 text-left  max-[745px]:text-center '>{item.text}</p>

            </div>
          ))
        }

      </div>
    </div>
  )
}

export default MarketCard
