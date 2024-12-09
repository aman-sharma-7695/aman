import React from 'react'
import logo from '../../assests/images/png/amanlogo.png'
import { FacebookIcon, InstagramIcon, LinkdenIcon, TwiiterIcon } from './Icon'

const Footer = () => {
  return (
    <div className='bg-dark-black'>
      <div className='max-w-[1240px] mx-auto px-5  '>
        <div className="flex items-center justify-center py-14">
          <img src={logo} alt="Logo" className="w-12 md:w-full max-w-[67px]" />
          <h1 className="text-white tracking-tight text-lg md:text-xl font-semibold ">AMAN <span className='text-[#FD6F00] pl-2'>SHARMA</span></h1>
        </div>
        <div>
          <div className="flex flex-col md:flex-row items-center justify-center text-center gap-6 md:gap-14 text-white  font-medium">
            <a href="#home" className="hover:text-orange-400 text-base md:text-base">Home</a>
            <a href="#aboutme" className="hover:text-orange-400 text-base md:text-base">About Me</a>
            <a href="#services" className="hover:text-orange-400 text-base md:text-base">Services</a>
            <a href="#projects" className="hover:text-orange-400 text-base md:text-base">Projects</a>
            <a href="#educations" className="hover:text-orange-400 text-base md:text-base">Educations</a>
            <a href="#contact" className="hover:text-orange-400 text-base md:text-base">Contact</a>

          </div>
          <div className='flex justify-center items-center cursor-pointer gap-4 md:gap-6 py-12'>
            <div className='w-10 h-10 rounded-full bg-dark-orange hover:bg-fed-orange  flex justify-center items-center'>
              <a href="https://www.facebook.com/profile.php?id=100015111160029&mibextid=ZbWKwL">
                <FacebookIcon />
              </a>
            </div>

            <div className='w-10 h-10 rounded-full bg-dark-orange hover:bg-fed-orange flex justify-center items-center'>
              <a href="https://x.com/AmanSharma7695?t=nVbDOYBT3qVtx1ScjH0dpg&s=09">
                <TwiiterIcon />
              </a>
            </div>

            <div className='w-10 h-10 rounded-full bg-dark-orange hover:bg-fed-orange flex justify-center items-center'>
              <a href="https://www.instagram.com/aman__sharma19?igsh=MTBsZzI1bWJlcHA4OA==">
                <InstagramIcon className="" />
              </a>
            </div>

            <div className='w-10 h-10 rounded-full bg-dark-orange hover:bg-fed-orange flex justify-center items-center'>
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

export default Footer