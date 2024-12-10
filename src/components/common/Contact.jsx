import React from 'react'

const Contact = () => {
  return (
    <div className='bg-dark-black' id='contact'>
      <div className='max-w-[1240px] mx-auto px-5 md:pt-20'>
        <div className="text-white md:text-center ">
          <h2 className="text-10xl md:text-11xl font-semibold pt-8 mb-4">Lets Design Together</h2>
          <p className="max-w-[732px] mx-auto text-base  leading-[147%] font-normal">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium
          </p>

          <div className=' flex flex-wrap justify-center md:justify-start gap-6  md:pl-280 py-60 cursor-pointer'>
            <input type="email" name="" id="" placeholder='Enter Your Email ' className='w-full max-w-[500px] text-black p-4 border rounded-custom-2xl outline-none' />

            <button className='bg-fed-orange hover:bg-dark-orange duration-700 px-9 py-19  rounded-custom-2xl'>Contact Me</button>
          </div>


        </div>

      </div>
    </div>
  )
}

export default Contact