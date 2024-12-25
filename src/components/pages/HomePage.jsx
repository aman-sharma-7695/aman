import React from 'react'
import Hero from '../Hero'
import AboutMe from '../AboutMe'
import Service from '../Service'
import Project from '../Project'
import Education from '../Education'
import Contact from '../common/Contact'
import Dummy from '../Dummy'

const HomePage = () => {
  return (
    <div>
        <Hero/>
        <AboutMe/>
        <Service/>
        <Project/>
        <Education/>
        <Contact/>
        {/* <Dummy/> */}
        
       
    </div>
  )
}

export default HomePage