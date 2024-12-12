import React, { useState } from 'react';
import { planComparisons } from '../../utils/Helper'; 

const Comprehensive = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleMenu = (menu) => {
        setOpenSection((prev) => (prev === menu ? null : menu));
    };

    return (
        <div className='lg:pt-[162px] md:pt-20 sm:pt-16 pt-10'>
            <div className="container">
                <div className="lg:flex justify-between">
                    <div className='lg:w-6/12 w-full'>
                        <h2 className='font-normal text-5xl max-md:text-[32px] text-[#00171F] max-w-[456px] md:leading-[52.8px] pb-[46px]'>
                            Comprehensive Utility <span className='font-bold'> Comparisons</span>
                        </h2>
                        <div className="space-y-6">
                            {planComparisons.map((plan) => (
                                <div
                                    key={plan.id}
                                    className="bg-white hover:shadow-lg rounded-md p-[14px] border transition-all duration-900 ease-in-out"
                                >
                                    <button
                                        onClick={() => toggleMenu(plan.id)}
                                        className="w-full text-left font-medium text-2xl flex leading-[26.4px] items-center max-md:text-lg lg:whitespace-nowrap"
                                    >
                                        <img className='w-[64px] mr-6' src={plan.imgSrc} alt={plan.title} />
                                        {plan.title}
                                        <span className={`md:text-xl text-sm ${plan.marginClass}`}>
                                            {openSection === plan.id ? (
                                                <img
                                                    src="./assets/images/svg/up.svg"
                                                    alt="Collapse"
                                                    className="h-5 w-5 transition-transform duration-700 transform rotate-0"
                                                />
                                            ) : (
                                                <img
                                                    src="./assets/images/svg/down.svg"
                                                    alt="Expand"
                                                    className="h-5 w-5 transition-transform duration-700 transform rotate-180"
                                                />
                                            )}
                                        </span>
                                    </button>
                                    <div
                                        className={`transition-all duration-500 ease-in-out overflow-hidden ${openSection === plan.id ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        {openSection === plan.id && (
                                            <p className="mt-2 text-gray-600 text-base font-normal leading-[25.6px] ml-[87px]">
                                                {plan.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='lg:w-6/12 flex justify-end max-lg:justify-center'>
                        <img
                            className='max-w-[500px] xl:h-[535px] lg:h-[470px] max-xl:max-w-[470px] max-sm:max-w-[336px] mt-10 pointer-events-none'
                            src="./assets/images/png/discusion.png"
                            alt="designer"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comprehensive;
