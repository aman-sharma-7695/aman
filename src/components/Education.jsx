import React from 'react'

const Education = () => {
    return (
        <div className='bg-dark-black' id="educations">
            <div className='max-w-7xl bg-opacity-50 mx-auto px-5 grid grid-cols-1 md:grid-cols-2 '>
                <div className='md:px-20 py-5 md:pt-20' data-aos="fade-right">
                    <h1 className='text-custom-xxl md:text-11xl font-bold text-white leading-[150%] md:pt-50 sm:leading-none !mb-0 sm:mb-6'> Education</h1>
                    <div className='md:w-[350px] h-[6px] my-3 bg-fed-orange'></div>
                    <p className='text-white text-base py-4'> I completed my Secondary Education from <b></b>Dayanand Public School (Barwala, Hisar). I completed B.SC with Electronics from Dayanand College, Hisar .
                    </p>

                </div>

                <div className='md:px-20 py-6 md:pt-20' data-aos="fade-down-left">
                    <h2 className='text-custom-xxl md:text-11xl font-bold text-fed-orange  leading-[120%] md:pt-50 sm:leading-none mb-4 sm:mb-6'> 2018 - 2024</h2>
                    <div className='flex flex-col gap-8 py-4'>
                        <div>
                            <h3 className="text-white  font-bold text-base flex items-center gap-4">

                            </h3>
                            <p className="text-white text-base leading-[100%]"> School Of Science | 2018</p>
                        </div>
                        <div>
                            <h3 className="text-white  font-bold text-base flex items-center gap-4">
                                Bachelor Degree
                            </h3>
                            <p className="text-white text-base leading-[100%]">B.SC (Electrocics)  </p>
                        </div>

                        <div>


                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Education