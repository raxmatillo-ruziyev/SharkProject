import React from 'react'
import { financeCards } from '../data'

const FinanceCard = () => {
    return (
        <div>
            <div className="grid grid-cols-3  py-5 max-[600px]:py-0 mx-auto gap-3  max-[1044px]:grid-cols-2  max-[700px]:grid-cols-1" >
                {
                    financeCards.map((item) => (
                        <div className="  mx-auto  border-gray-200   rounded-2xl py-2    w-87  max-[1044px]:w-97  max-[786px]:w-87 max-[700px]:w-[80%] text-center transition-colors duration-300" >
                            <img className=' bg-[white] rounded-xl   mx-auto w-[280px] h-[200px]  max-[450px]:w-[210px] max-[450px]:h-[150px] max-[550px]:w-[230px] max-[550px]:h-[170px] my-2  ' src={item.img} alt="" loading='lazy' />
                            <h2 className='text-white text-[27px] py-4  max-[1000px]:text-[25px]  max-[900px]:text-[23px]  max-[800px]:text-[21px]   max-[700px]:text-[20px]  max-[600px]:text-[18px]  max-[500px]:text-[16px]  max-[400px]:text-[14px]  max-[745px]:text-center' >{item.title}</h2>



                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default FinanceCard
