
import { useEffect, useState } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import BackToTop from './components/common/BackToTop';
import Contact from './components/common/Contact';
import Footer from './components/common/Footer';
import NavBar from './components/common/NavBar';
import Education from './components/Education';
import Hero from './components/Hero';
import Loader from './components/Loader';
import Project from './components/Project';
import Service from './components/Service';
import { Outlet, Route, Routes } from 'react-router-dom';
import Serverices from './components/pages/Serverices';
import ContactPage from './components/pages/ContactPage';

function App() {
  return (
    <div className='overflow-clip'>
      {/* <NavBar/>
   <Hero/>
   <AboutMe/>
   <Service/>
   <Project/>
   <Education/>
   <Contact/>
   <Footer/>
   <BackToTop/> */}
      <NavBar />
      {/* <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/project' element={<Project />} />
        <Route path='/services' element={<Serverices />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes> */}
      <Outlet />
      <Footer />
      <BackToTop/>
    </div>
  );
}

export default App;
