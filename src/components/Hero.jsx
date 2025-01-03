import React, { useEffect } from 'react'
import Heroimg from '../assests/images/png/heroimg.png'
import resume from '../assests/pdf/resume.pdf'
import AOS from 'aos'
import 'aos/dist/aos.css'


import { FacebookIcon, InstagramIcon, LinkdenIcon, TwiiterIcon } from './common/Icon'

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'resume.pdf';
    link.click();
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, [])
  return (
    <div className='bg-dark-black relative' id='home'>
      {/* <div className='w-[200px] h-[200px] bg-blue-600 absolute top-1/2 left-0 blur-[100px]'></div> */}
      <div className='max-w-8xl relative z-10 mx-auto px-5 md:px-6 py-42 grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex flex-col justify-center  items-start  md:text-left' data-aos="fade-up-right" >
          <h2 className='text-white text-xl md:text-2xl font-semibold'>Hi I am </h2>
          <h3 className='text-fed-orange text-xl lg:text-custom-xxl leading-145 font-semibold'>AMAN SHARMA</h3>
          <h4 className='text-white text-10xl lg:text-12xl font-bold leading-none'>FRONT END </h4>
          <p className='text-fed-orange text-10xl lg:text-11xl font-bold  leading-none md:pl-24 lg:pl-40'>DEVELOPER</p>
          <p className='text-white text-sm  lg:text-base max-w-[698px] py-4 md:py-22 font-normal'>I'm a passionate Front-End Developer with a mission to create delightful and intuitive digital experiences. With a strong foundation in design principles and a keen eye for detail.</p>
          <div className='flex flex-row gap-5 md:gap-8'>
            <button className='bg-fed-orange hover:bg-orange-700 duration-700 text-white text-sm md:text-lg font-normal px-3 py-2 md:px-6 lg:px-12 xl:px-12   md:py-3 lg:py-17 rounded-custom-xl' data-aos="fade-up-left">Hire Me</button>
            <button onClick={handleDownload} className='bg-fed-orange hover:bg-orange-700 transition duration-700 text-white text-sm md:text-lg font-normal px-3 py-2 md:px-6 lg:px-12 xl:px-12 md:py-4 lg:py-17 rounded-custom-xl' data-aos="fade-up-left">Download CV</button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center  " data-aos="zoom-in-up">
          <div className='shadow-circle'>         
             <img src={Heroimg} alt="Hero" className=" py-5 md:py-0 w-full max-w-[350px] "  />
          </div>
          <div className='flex justify-center items-center  md:pt-9 gap-4 md:gap-5 ' data-aos="flip-up">
            <div className='w-10 h-10 rounded-full  cursor-pointer bg-stone-600 hover:bg-blue-600 duration-500  flex justify-center items-center'>
              <a href="https://www.facebook.com/profile.php?id=100015111160029&mibextid=ZbWKwL">
                <FacebookIcon />
              </a>
            </div>

            <div className='w-10 h-10 rounded-full  cursor-pointer bg-stone-600 hover:bg-black duration-500 flex justify-center items-center'>
              <a href="https://x.com/AmanSharma7695?t=nVbDOYBT3qVtx1ScjH0dpg&s=09">
                <TwiiterIcon />
              </a>
            </div>

            <div className='w-10 h-10 rounded-full  cursor-pointer bg-stone-600 hover:bg-pink-600 duration-500 flex justify-center items-center'>
              <a href="https://www.instagram.com/aman__sharma19?igsh=MTBsZzI1bWJlcHA4OA==">
                <InstagramIcon className="" />
              </a>
            </div>

            <div className='w-10 h-10 rounded-full  cursor-pointer bg-stone-600 hover:bg-sky-600 duration-500 flex justify-center items-center'>
              <a href="https://www.linkedin.com/in/aman-sharma-415714314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <LinkdenIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero