import React from 'react'

const CustomButton = ({ CustomButton, ButtonArrow }) => {
    return (
        <button className='font-bold text-white gap-2 rounded-full hover:scale-90 rounded-tl-none py-3 px-6 hover:rounded-br hover:rounded-tl-none transition-all duration-700 bg-[#00A8E8] flex items-center text-base'>{CustomButton} <span>{ButtonArrow}</span>
        </button>
    )
}

export default CustomButton