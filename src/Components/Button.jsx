import React from 'react'

const Button = ({ title, color, text, icon, bg, border }) => {
    return (
        <div>
            <button className={`${text}  cursor-pointer px-4 py-1 max-[573px]:px-3 rounded-3xl items-center flex justify-between gap-3  hover: transition-colors duration-300 ${border} ${color} `}>{title} <img className={`border rounded-3xl ${bg} pl-[3px]  py-[1.5px] max-[573px]:w-[30px]`} src={icon} alt="" /></button>
        </div>
    )
}

export default Button
