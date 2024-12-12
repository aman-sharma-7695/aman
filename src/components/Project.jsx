import React, { useState } from 'react'
import careimg from '../assests/images/png/careimg.png'
import businessimg from '../assests/images/png/businessimg.png'
import styleimg from '../assests/images/png/styleimg.png'

const Project = () => {
  const [tabs, setTabs] = useState("all")
  return (
    <div className='bg-dark-black' id='projects'>
      <div className='max-w-[1240px] mx-auto px-4 pt-24 md:pt-20 lg:pb-16'>
        <div className="text-white md:text-center  mb-8">
          <h2 className="text-10xl md:text-[60px] lg::text-11xl font-semibold mb-4">My Projects</h2>
          <p className="max-w-[500px] lg:max-w-[732px] mx-auto text-sm lg:text-base  leading-[147%] font-normal">
            Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus
          </p>

          <div className=' flex flex-wrap md:flex-row justify-center  gap-5   px-4 py-[60px] cursor-pointer'>
            <button onClick={() => setTabs("all")} className={` text-black  hover:text-white hover:bg-fed-orange duration-700  px-5 py-10  rounded-xl ${tabs === 'all' ? "bg-fed-orange text-white" : "bg-white  "}`}>All</button>
            <button onClick={() => setTabs("ui")} className={`text-black  hover:text-white hover:bg-fed-orange duration-700  px-5 py-10 rounded-xl ${tabs === 'ui' ? "bg-fed-orange text-white" : "bg-white"}`}>UI/UX</button>
            <button onClick={() => setTabs("app")} className={`text-black  hover:text-white hover:bg-fed-orange duration-700  px-5 py-10 rounded-xl ${tabs === 'app' ? "bg-fed-orange text-white" : "bg-white"}`}>App Design</button>
            <button onClick={() => setTabs("web")} className={`text-black  hover:text-white hover:bg-fed-orange duration-700  px-5 py-10 rounded-xl ${tabs === 'web' ? "bg-fed-orange text-white" : "bg-white"}`}>Web Design</button>
            <button onClick={() => setTabs("graphic")} className={`text-black  hover:text-white hover:bg-fed-orange duration-700  px-5 py-10 rounded-xl ${tabs === 'graphic' ? "bg-fed-orange text-white" : "bg-white"}`}>Graphic Design</button>
          </div>
        </div>

        <div className='max-w-[1240px] mx-auto '>
          <div className='bg-dark-black cursor-pointer grid grid-cols-1 md:grid-cols-3  md:gap-11 px-4'>

            {tabs === "all" && <div className='bg-dark-black'>
              <div className='bg-skin-color px-5   rounded-md  md:rounded-xl  md:pl-39px md:pr-7'>
                <img src={careimg} alt="" className='w-full' />
              </div>
              <h1 className='text-white hover:text-fed-orange text-base lg:text-custom-1xl py-3  md:pt-5'>Web Design</h1>
              <p className='text-white hover:text-fed-orange text-base lg:text-lg font-bold  pb-39  '>AirCalling Landing Page Design </p>
            </div>
            }
            {tabs === "all" &&
              <div className='bg-dark-black'>
                <div className='bg-skin-color px-5 rounded-md  md:rounded-xl md:pl-39px md:pr-7'>
                  <img src={businessimg} alt="" className='' />
                </div>
                <h2 className=' text-white hover:text-fed-orange text-base lg:text-custom-1xl py-3 md:pt-5'>Web Design</h2>
                <p className='text-white hover:text-fed-orange text-base lg:text-lg  leading-[150%]  font-bold pb-39 '>Business Landing Page Design </p>
              </div>
            }
            {tabs === "all" &&
              <div className='bg-dark-black'>
                <div className='bg-skin-color px-5  rounded-md md:rounded-xl md:pl-39px md:pr-7'>
                  <img src={styleimg} alt="" className='' />
                </div>
                <h2 className=' text-white hover:text-fed-orange text-base lg:text-custom-1xl py-3 md:pt-5'>Web Design</h2>
                <p className='text-white hover:text-fed-orange text-base lg:text-lg font-bold pb-39 '>Ecom Web Page Design </p>
              </div>
            }


            {tabs === "ui" &&
              <div className='bg-dark-black'>
                <div className='bg-skin-color px-5 rounded-md  md:rounded-xl md:pl-39px md:pr-7'>
                  <img src={businessimg} alt="" className='' />
                </div>
                <h2 className=' text-white hover:text-fed-orange text-base lg:text-custom-1xl py-3 md:pt-5'>Web Design</h2>
                <p className='text-white hover:text-fed-orange text-base lg:text-lg  leading-[150%]  font-bold pb-39 '>Business Landing Page Design </p>
              </div>
            }

            {tabs === "ui" &&
              <div className='bg-dark-black'>
                <div className='bg-skin-color px-5  rounded-md md:rounded-xl md:pl-39px md:pr-7'>
                  <img src={styleimg} alt="" className='' />
                </div>
                <h2 className=' text-white hover:text-fed-orange text-base lg:text-custom-1xl py-3 md:pt-5'>Web Design</h2>
                <p className='text-white hover:text-fed-orange text-base lg:text-lg font-bold pb-39 '>Ecom Web Page Design </p>
              </div>
            }
            {tabs === "app" &&
              <div className='bg-dark-black'>
                <div className='bg-skin-color px-5  rounded-md md:rounded-xl md:pl-39px md:pr-7'>
                  <img src={styleimg} alt="" className='' />
                </div>
                <h2 className=' text-white hover:text-fed-orange text-base lg:text-custom-1xl py-3 md:pt-5'>Web Design</h2>
                <p className='text-white hover:text-fed-orange text-base lg:text-lg font-bold pb-39 '>Ecom Web Page Design </p>
              </div>
            }
            {tabs === "app" &&
              <div className='bg-dark-black'>
                <div className='bg-skin-color px-5  rounded-md md:rounded-xl  md:pl-39px md:pr-7'>
                  <img src={styleimg} alt="" className='' />
                </div>
                <h2 className=' text-white hover:text-fed-orange text-base lg:text-custom-1xl py-3 md:pt-5'>Web Design</h2>
                <p className='text-white hover:text-fed-orange text-base lg:text-lg font-bold pb-39 '>Ecom Web Page Design </p>
              </div>
            }
            {tabs === "app" &&
              <div className='bg-dark-black'>
                <div className='bg-skin-color px-5  rounded-md md:rounded-xl md:pl-39px md:pr-7'>
                  <img src={styleimg} alt="" className='' />
                </div>
                <h2 className=' text-white hover:text-fed-orange text-base lg:text-custom-1xl py-3 md:pt-5'>Web Design</h2>
                <p className='text-white hover:text-fed-orange text-base lg:text-lg font-bold pb-39 '>Ecom Web Page Design </p>
              </div>
            }
            {tabs === "web" && <div className='bg-dark-black'>
              <div className='bg-skin-color px-5   rounded-md  md:rounded-xl md:pl-39px md:pr-7'>
                <img src={careimg} alt="" className='w-full' />
              </div>
              <h1 className='text-white hover:text-fed-orange text-base lg:text-custom-1xl py-3  md:pt-5'>Web Design</h1>
              <p className='text-white hover:text-fed-orang text-baseelg: text-lg font-bold leading-[150%] pb-39  '>AirCalling Landing Page Design </p>
            </div>
            }
            {tabs === "web" &&
              <div className='bg-dark-black'>
                <div className='bg-skin-color px-5  rounded-md md:rounded-xl md:pl-39px md:pr-7'>
                  <img src={styleimg} alt="" className='' />
                </div>
                <h2 className=' text-white hover:text-fed-orange text-base lg:text-custom-1xl py-3 md:pt-5'>Web Design</h2>
                <p className='text-white hover:text-fed-orange text-base lg:text-lg font-bold pb-39 '>Ecom Web Page Design </p>
              </div>
            }
            {tabs === "graphic" &&
              <div className='bg-dark-black'>
                <div className='bg-skin-color px-5 rounded-md  md:rounded-xl md:pl-39px md:pr-7'>
                  <img src={businessimg} alt="" className='' />
                </div>
                <h2 className=' text-white hover:text-fed-orange text-base lg:text-custom-1xl py-3 md:pt-5'>Web Design</h2>
                <p className='text-white hover:text-fed-orange text-base lg:text-lg  leading-[150%]  font-bold pb-39 '>Business Landing Page Design </p>
              </div>
            }
            {tabs === "graphic" &&
              <div className='bg-dark-black'>
                <div className='bg-skin-color px-5 rounded-md  md:rounded-xl md:pl-39px md:pr-7'>
                  <img src={businessimg} alt="" className='' />
                </div>
                <h2 className=' text-white hover:text-fed-orange text-base lg:text-custom-1xl py-3 md:pt-5'>Web Design</h2>
                <p className='text-white hover:text-fed-orange text-base lg:text-lg  leading-[150%]  font-bold pb-39 '>Business Landing Page Design </p>
              </div>
            }
            {tabs === "graphic" &&
              <div className='bg-dark-black'>
                <div className='bg-skin-color px-5 rounded-md  md:rounded-xl md:pl-39px md:pr-7'>
                  <img src={businessimg} alt="" className='' />
                </div>
                <h2 className=' text-white hover:text-fed-orange text-base lg:text-custom-1xl py-3 md:pt-5'>Web Design</h2>
                <p className='text-white hover:text-fed-orange text-base lg:text-lg  leading-[150%]  font-bold pb-39 '>Business Landing Page Design </p>
              </div>
            }


          </div>
        </div>


      </div>
    </div>
  )
}

export default Project