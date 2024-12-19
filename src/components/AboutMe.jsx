import React, { useState, useEffect } from 'react'
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
      <div className='max-w-[1240px] mx-auto px-4 pt-5 md:pt-20 grid grid-cols-1 md:grid-cols-2 '>
        <div className='order-1 my-8'>
          <img src={Aboutimg} alt="" className='w-full max-w-[500px]' data-aos="zoom-in-up" />

        </div>
        <div className='flex flex-col lg:py-5 accents md:order-1' data-aos="fade-up"
          data-aos-anchor-placement="top-center">
          <h2 className='text-white text-10xl  lg:text-11xl font-semibold leading-[149%] '>About Me</h2>
          <p className='text-white text-sm lg:text-base  pt-15 font-normal leading-[147%] max-w-[756px]'>I’m a front-end web developer with over a decade of experience. I work with agencies across the globe to create high performance & rich interactive websites that work across all platforms & devices.</p>
          <div className='flex  flex-col gap-1 '>
            <h3 className='text-white text-lg lg:text-2xl pt-2 lg:pt-5 '>UI</h3>
            <input type="range" className='w-full ' min="0"
              max="100"
              value="80" />
            <h4 className='text-white text-lg  lg:text-2xl pt-2  lg:pt-5'>Website Design</h4>
            <input type="range" className='w-full' min="0"
              max="100"
              value="70" />
            <h4 className='text-white text-lg  lg:text-2xl pt-2 lg:pt-5'>Graphic Design</h4>
            <input type="range" className='w-full' />
            <h4 className='text-white text-lg  lg:text-2xl pt-2 lg:pt-5'>Graphic Design</h4>
            <input type="range" className='w-full' />
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutMe