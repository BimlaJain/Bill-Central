import React from 'react'
import CustomButton from '../../common/Custombutton';
import { ButtonArrow } from '../../utils/Icons';
import { BENEFITS } from '../../utils/Helper';

const EnergyPlans = () => {
    return (
        <div className='lg:pt-[162px] md:pt-20 sm:pt-16 pt-10'>
            <div className="container">
                <div className="flex justify-between max-lg:flex-wrap max-lg:justify-center">
                    <div className='lg:w-6/12 w-full'>
                        <img className='max-w-[507px] max-lg:mx-auto max-xl:max-w-[465px] max-lg:w-full pointer-events-none' src="./assets/images/switiching-energy.png" alt="switching-energy" />
                    </div>
                    <div className='lg:w-6/12 w-full max-lg:pt-10'>
                        <h2 className='font-normal text-5xl max-md:text-3xl leading-[52.8px] text-[#00171F] max-w-[409px] max-lg:max-w-none'><span className='font-bold'>Switching Energy</span> Made Simple</h2>
                        <p className='text-[#00171F] text-base font-normal leading-[24px] max-w-[558px] pt-4 max-lg:max-w-none'>Say goodbye to confusing energy plans! We simplify the process by providing clear and competitive electricity and gas recommendations. Whether you're moving or just seeking a better deal, our platform connects you with the best energy providers quickly and easily, helping you save on energy bills.</p>
                        <h4 className='text-[#003459] font-normal text-2xl leading-[26.4px] pt-[38px] max-md:pt-5'>Benefits of Comparing Energy Plans</h4>
                        <ul className="ml-4 pt-7 max-md:py-7 pb-[42px]">
                            {BENEFITS.map((BENEFITS, index) => (
                                <li key={index}
                                    className={`list-disc text-[#00171F] text-base font-normal leading-6 max-w-[382px] ${index !== 0 ? 'pt-2' : ''}`}
                                > {BENEFITS}</li>))}
                        </ul>
                        <CustomButton CustomButton="Compare With Us" ButtonArrow={<ButtonArrow />} style={{ paddingLeft: '24px', paddingRight: '24px' }} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EnergyPlans