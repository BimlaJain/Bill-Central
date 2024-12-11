import React from 'react'
import { cardData } from '../../utils/Helper'

const WhyChoose = () => {
    return (
        <div className='lg:pt-[162px] md:pt-20 sm:pt-16 pt-10'>
            <div className="container">
                <h2 className='font-normal text-5xl max-md:text-[32px] text-[#00171F] md:leading-[52.8px] pb-4 text-center'>
                    Why Choose Us for <span className='font-bold'>Utilities</span>
                </h2>
                <p className='pb-[58px] text-[#00171F] text-base font-normal max-w-[620px] text-center mx-auto'>
                    This emphasizes both the action and the benefits, drawing in potential customers with a clear value proposition. Let me know if you'd like any adjustments!
                </p>
                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="bg-[#003459] p-10 rounded-md">
                        <div className="md:flex lg:flex-col justify-between">
                            <img src={cardData[0].icon} alt={cardData[0].title} className="xl:w-[277px] w-[200px]" />
                            <div className="flex-col">
                                <h3 className="font-normal text-2xl text-white pt-7 pb-3">{cardData[0].title}</h3>
                                <p className="font-normal text-base text-white xl:max-w-[344px] max-w-[300px]">{cardData[0].description}</p>
                                <a href="#">
                                    <img
                                        className="bg-white py-[12px] px-[24px] mt-[22px] rounded-[446px]"
                                        src="./assets/images/svg/right-arrow.svg"
                                        alt="right-arrow"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-[2]">
                        {cardData.slice(1).map((card) => (
                            <div key={card.id} className="border shadow-lg rounded-md p-6">
                                <img src={card.icon} alt={card.title} />
                                <h3 className="font-normal text-2xl text-black pt-7 pb-3">{card.title}</h3>
                                <p className="font-normal text-base text-[#00171F]">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose
