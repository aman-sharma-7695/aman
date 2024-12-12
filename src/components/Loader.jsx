import React from 'react'

import loadergif1 from '../assests/images/png/loadingimg.gif'


const Loader = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-black' >
      <img src={loadergif1} alt="loading" className='w-full max-w-[150px] md:max-w-[300px]' />
        
   

</div>
  )
}

export default Loader