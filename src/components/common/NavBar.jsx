import React, { useState } from 'react';
import logo from '../../assests/images/png/asimg.png';
import { CrossIcon, MenuIcon } from './Icon';
import resume from '../../assests/pdf/resume.pdf'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'resume.pdf';
    link.click();
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-dark-black sticky top-0 z-10">
      <div className="max-w-[1280px] mx-auto px-2 md:px-14">
        <div className="flex justify-between items-center  py-3">

          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-12 md:w-full max-w-[70px]" />
            <h1 className="text-white tracking-tight text-custom-xl md:text-xl font-semibold ">AMAN <span className='text-fed-orange pl-2'>SHARMA</span></h1>
          </div>


          <div className="hidden md:flex items-center space-x-6 text-white text-sm font-medium">
            <a href="#home" className="hover:text-orange-400">Home</a>
            <a href="#aboutme" className="hover:text-orange-400">About Me</a>
            <a href="#services" className="hover:text-orange-400">Services</a>
            <a href="#projects" className="hover:text-orange-400">Projects</a>
            <a href="#educations" className="hover:text-orange-400">Educations</a>
            <a href="#contact" className="hover:text-orange-400">Contact</a>
            <button onClick={handleDownload} className="bg-fed-orange px-4 py-2  rounded hover:bg-orange-700 duration-500">
              Download CV
            </button>
          </div>


          <div className="md:hidden flex items-center">
            <button
              className="text-white text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <CrossIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>


        {isMenuOpen && (
          <div className="flex flex-col items-center space-y-4 text-white text-sm font-medium bg-dark-black py-4 md:hidden">
            <a href="#home" className="hover:text-orange-400" onClick={handleCloseMenu}>Home</a>
            <a href="#aboutme" className="hover:text-orange-400" onClick={handleCloseMenu}>About Me</a>
            <a href="#services" className="hover:text-orange-400" onClick={handleCloseMenu}>Services</a>
            <a href="#projects" className="hover:text-orange-400" onClick={handleCloseMenu}>Projects</a>
            <a href="#educations" className="hover:text-orange-400" onClick={handleCloseMenu}>Educations</a>
            <a href="#contact" className="hover:text-orange-400" onClick={handleCloseMenu}>Contact</a>
            <button className="bg-fed-orange px-4 py-2 hidden  md:flex   transition">
              Download CV
            </button>

          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
