import React from 'react'
import { tradingCards } from '../data'

const TradingCrad = () => {
  return (
    <div className="grid grid-cols-3 py-5 mx-auto gap-3 max-[1000px]:border-2 max-[1000px]:border-red-500 max-[1127px]:grid-cols-2 max-[746px]:grid-cols-1" >
      {
        tradingCards.map((item) => (
          <div className="border  mx-auto text-center border-gray-200 rounded-2xl py-5 px-4 w-92 max-[1137px]:w-89 max-[1127px]:w-107 max-[897px]:w-89 max-[746px]:w-[90%] max-[745px]:h-70
          h-120 max-[1127px]:h-115  max-[897px]:h-95 text-center  hover:bg-[black] bg-gray-900 transition-colors duration-300" >

            <h2 className='text-white text-[40px] max-[1127px]:text-[50px] max-[897px]:text-[38px] max-[540px]:text-[32px] max-[450px]:text-[28px] max-[399px]:text-[24px]  max-[349px]:text-[20px] max-[655px]:text-[35px] text-center mx-auto max-[655px]:w-[85%] max-[498px]:w-[95%]  w-[75%]' >{item.title}</h2>
            <p className='text-white text-[16px]  max-[1127px]:text-[18px] max-[897px]:text-[15px] mb-3 w-[82%] mx-auto max-[450px]:text-[14px]  max-[349px]:text-[12px]'>{item.text}</p>
            <img className='mx-auto w-[120px] h-[130px]  max-[745px]:h-[120px] max-[610px]:h-[110px] max-[510px]:h-[100px] ' src={item.img} alt="" loading='lazy' />
          </div>
        ))
      }

    </div>
  )
}

export default TradingCrad
