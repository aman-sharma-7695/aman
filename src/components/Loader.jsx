import React from 'react'

import loadergif1 from '../assests/images/png/loader1.gif'


const Loader = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-black' >
      <img src={loadergif1} alt="loading" className='md:w-[300px]' />
        
   

</div>
  )
}

export default Loader