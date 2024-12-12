
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

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading delay (e.g., for fetching data)
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000); // Replace 3000 with actual loading duration

  //   return () => clearTimeout(timer); // Cleanup
  // }, []);


  // if (loading) {
  //   return <Loader/>;
  // } 

  
  return (
   <div className='overflow-clip'>
   <NavBar/>
   <Hero/>
   <AboutMe/>
   <Service/>
   <Project/>
   <Education/>
   <Contact/>
   <Footer/>
   <BackToTop/>
   </div>
  );
}

export default App;
