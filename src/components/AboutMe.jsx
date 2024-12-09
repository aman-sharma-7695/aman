import React, { useEffect } from 'react'
import Aboutimg from '../assests/images/png/Aboutimg.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, [])
  return (
    <div className='bg-dark-black' id='aboutme'>
      <div className='max-w-[1240px] mx-auto px-6 pt-14 md:px-20 md:pt-20 grid grid-cols-1 md:grid-cols-2 '>
        <div className='order-1 my-8'>
          <img src={Aboutimg} alt="" className='w-[100%] md:w-full max-w-[400px] ' data-aos="zoom-in-up" />

        </div>
        <div className='flex flex-col py-5 md:py-5 accents md:order-1' data-aos="fade-up"
     data-aos-anchor-placement="top-center">
          <h2 className='text-white text-10xl md:text-11xl font-semibold leading-[149%] '>About Me</h2>
          <p className='text-white text-base  pt-15 font-normal leading-[147%] max-w-[756px]'>I’m a front-end web developer with over a decade of experience. I work with agencies across the globe to create high performance & rich interactive websites that work across all platforms & devices.</p>
          <div className='flex  flex-col gap-2 '>
            <h3 className='text-white text-2xl pt-5'>UI</h3>
            <input type="range" className='w-full ' />
            <h4 className='text-white text-2xl'>Website Design</h4>
            <input type="range" className='w-full' />
            <h4 className='text-white text-2xl'>Graphic Design</h4>
            <input type="range" className='w-full' />
            <h4 className='text-white text-2xl'>Graphic Design</h4>
            <input type="range" className='w-full' />
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutMe