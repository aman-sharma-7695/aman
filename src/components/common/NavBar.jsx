import React, { useState , useEffect} from 'react';
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
  

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);


  return (
    <div className="bg-dark-black sticky top-0 z-20">
      <div className="max-w-[1240px] mx-auto px-2">
        <div className="flex justify-between items-center  py-3">

          <div className="flex items-center max-w-max">
            <img src={logo} alt="Logo" className="w-12 md:w-full max-w-[70px]" />
            <p className="text-white max-w-max hidden lg:flex tracking-tight text-lg lg:text-xl font-montserrat font-semibold ">AMAN <span className='text-fed-orange font-normal pl-2'>SHARMA</span></p>
          </div>


          <div className="hidden md:flex items-center lg:space-x-6 space-x-4 text-white text-sm font-medium">
            <a href="#home" className="hover:text-orange-400">Home</a>
            <a href="#aboutme" className="hover:text-orange-400">About Me</a>
            <a href="#services" className="hover:text-orange-400">Services</a>
            <a href="#projects" className="hover:text-orange-400">Projects</a>
            <a href="#educations" className="hover:text-orange-400">Educations</a>
            <a href="#contact" className="hover:text-orange-400">Contact</a>
            <button onClick={handleDownload} className="bg-fed-orange text-base px-2 py-2 md:px-6 lg:px-9 xl:px-9  md:py-3  lg:py-[12px] rounded-custom-xl hover:bg-orange-700 transition duration-500">
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

        <div class="bg-navbar-border w-full h-[0.5px] max-md:relative z-50"></div>
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
