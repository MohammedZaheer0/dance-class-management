import React from 'react'

const Message = () => {
  return (
    <div>
      <div className={`py-4 sm:px-5 px-3  flex-1 h-screen max-w-full `}>

      <h1 className='shadow py-3 pl-5 lg:rounded-full rounded text-[18px] sm:text-2xl max-w-[100%] font-semibold'>Message</h1>
        <div className='grid grid-cols-[25%_75%] my-5'>

          <div className='max-w-[100%] shadow-lg'>

           <div className='max-w-[90%] mx-auto py-5'>
           <div className='bg-[#F3F3F3] py-3 px-4 rounded-md flex justify-between items-center'>
              <input type="text" placeholder='Search' id='searchplaceholder' className=' font-medium border-none outline-none bg-transparent mr-5' />
              <i className="fa-solid fa-magnifying-glass text-[#A686AD]"></i>
            </div>
           </div>

           <div className='max-w-[100%] px-5'>
                <div className='flex items-center'>
                  <img src="vince-fleming-j3lf-Jn6deo-unsplash 1 (1).png" alt="img" />
                  <div>
                    <h2>Zachary Erza</h2>
                    <p>Lorem ipsum dolor sit amet, consectetu.</p>
                  </div>
                <p>1</p>
                </div>
           </div>

          </div>

          <div className='max-w-[100%] shadow-lg'>
              <div className='flex items-center justify-between px-10'>
                <div className='flex items-center'>
                <img src="jake-nackos-IF9TK5Uy-KI-unsplash 1.png" alt="Jake" className='cursor-pointer mt-3'/> 
                <span className='ml-3 font-semibold cursor-pointer'>Mirabel</span>
                </div>
                <i className="fa-solid fa-bars cursor-pointer text-2xl text-[#A686AD]"></i>
              </div>
          </div>
          
        </div>

      </div>
  </div>
  )
}

export default Message
