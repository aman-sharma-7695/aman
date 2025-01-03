import React, { useState } from 'react'

const Contact = () => {
  const [signIn, setSignIn] = useState({
    name: "",
    email: "",
    message: "",
  })
  const inputChange = (e) => {
    e.preventDefault();
    console.log(signIn)
    setSignIn({
      name: "",
      email: "",
      message: "",
    })
  }
  return (
    <div className='bg-dark-black' id='contact'>
      <div className='max-w-8xl mx-auto px-4 md:pt-14'>
        <div className="text-white text-center ">
          <h2 className="text-10xl md:text-13xl lg::text-11xl font-semibold pt-8 mb-4">Lets Design Together</h2>
          <p className="max-w-[500px] lg:max-w-[732px] mx-auto text-sm lg:text-base  leading-147 font-normal">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium
          </p>

       
            <form onSubmit={inputChange} className='flex flex-col gap-5 items-center' action="">
              <div className='flex flex-col w-full gap-7 py-11 md:py-60'>
             <div className=''>
             <input type="text"
                name="name"
                id="name" required
                placeholder='Enter Your Name*'
                value={signIn.name}
                onChange={(e) => setSignIn({ ...signIn, name: e.target.value })}
                className='w-[290px] md:w-[500px] text-black p-2 md:p-4  border-[2.2px] duration-300 hover:border-fed-orange rounded-md  md:rounded-custom-2xl focus:outline-none outline-none text-sm md:text-base placeholder:text-sm md:placeholder:text-base placeholder:text-opacity-50 placeholder:font-medium' />
             </div>
            <div>
            <input type="email"
                name="email"
                id="email"
                placeholder='Enter Your Email*'
                required
                value={signIn.email}
                onChange={(e) => setSignIn({ ...signIn, email: e.target.value })}
                className='w-[290px] md:w-[500px] text-black p-2 md:p-4 border-[2.2px] duration-300 hover:border-fed-orange rounded-md md:rounded-custom-2xl outline-none text-sm md:text-base placeholder:text-sm md:placeholder:text-base placeholder:text-opacity-50 placeholder:font-medium' />
            </div>
            <div>
            <textarea
                name="message"
                id="message"
                placeholder='Message'
                required
                value={signIn.message}
                onChange={(e) => setSignIn({ ...signIn, message: e.target.value })}
                className='w-[290px] md:w-[500px] h-[100px]  text-black resize-none p-2 border-[2.2px] duration-300 hover:border-fed-orange rounded-md md:rounded-custom-2xl outline-none text-sm md:text-base placeholder:text-sm md:placeholder:text-base  placeholder:text-opacity-50  placeholder:font-medium'></textarea>

 
            </div>
              
          <div>
          <button onSubmit={inputChange} className='bg-fed-orange  w-[110px] md:w-[200px] inline-block text-sm md:text-lg font-semibold hover:bg-dark-orange transition duration-700  py-10 md:px-9 md:py-19 rounded-lg  md:rounded-custom-2xl'>Contact Me</button>
          </div>
              </div>

            </form>
          


        </div>

      </div>
    </div>
  )
}

export default Contact