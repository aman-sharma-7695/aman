import React from 'react'

const Contact = () => {
  return (
    <div className='bg-dark-black' id='contact'>
      <div className='max-w-[1240px] mx-auto px-4 md:py-16'>
        <div className="text-white md:text-center ">
          <h2 className="text-10xl md:text-[50px] lg::text-11xl font-semibold pt-8 mb-4">Lets Design Together</h2>
          <p className="max-w-[500px] lg:max-w-[732px] mx-auto text-sm lg:text-base  leading-[147%] font-normal">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium
          </p>

          <div className=' flex flex-wrap justify-center gap-6 py-11 md:py-60 cursor-pointer'>
            <input type="email" name="" id="" placeholder='Enter Your Email ' className='w-full max-w-[500px] text-black p-4 border rounded-custom-2xl outline-none' />

            <button className='bg-fed-orange hover:bg-dark-orange duration-700 px-5 py-15 md:px-9 md:py-19  rounded-custom-2xl'>Contact Me</button>
          </div>


        </div>

      </div>
    </div>
  )
}

export default Contact