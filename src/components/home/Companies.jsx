import React from 'react'
import { LOGOS } from '../../utils/Helper'
const Companies = () => {
  return (
    <div>
          <div>
              <div className="lg:container">
                  <h2 className='font-normal text-[38px] max-md:text-3xl text-[#003459] max-w-[548px] leading-[41.8px] max-2xl:-mt-[75px] max-xl:-mt-0 max-xl:pt-10 max-xl:text-center max-xl:mx-auto'>More than <span className='text-[#00A8E8]'>80,000</span>+ companies trust bill central </h2>
                  <div className="flex pt-[63px] max-xl:pt-12 max-md:pt-10 pb-4 overflow-auto">
                      {LOGOS.map((LOGO, index) => (
                          <img
                              key={index}
                              className={`pointer-events-none max-w-[126.67px] h-[62px] ${index !== LOGOS.length - 1 ? 'mr-[45px] max-xl:mr-[30px] max-lg:mr-[38px]' : ''}`}
                              src={LOGO.src}
                              alt={LOGO.alt}
                          />
                      ))}

                  </div>
              </div>
          </div>
    </div>
  )
}

export default Companies
