import React from 'react'

const Message = () => {

    const MessageData = [
      {
        id:1,
        name : 'Zachary Erza',
        img: 'vince-fleming-j3lf-Jn6deo-unsplash 1 (1).png',
        title : 'Lorem ipsum dolor sit amet, consectetu.',
        msg : 1
      },
      {
        id:2,
        name : 'Katrina Hawkins',
        img: 'shannon-vandenheuvel-Z9p4M58Hdyo-unsplash 1.png',
        title : 'Lorem ipsum dolor sit amet, consectetu.',
        msg : 3
      },
      {
        id:3,
        name : 'Mirabel',
        img: 'jake-nackos-IF9TK5Uy-KI-unsplash 1.png',
        title : 'Lorem ipsum dolor sit amet, consectetu.',
        msg : ''
      },
      {
        id:4,
        name : 'Dorian',
        img: 'austin-wade-X6Uj51n5CE8-unsplash 1.png',
        title : 'Lorem ipsum dolor sit amet, consectetu.',
        msg : ''
        },
        {
          id:5,
          name : 'Hamnet Piercer',
          img: 'austin-wade-ex6qfO4TPMY-unsplash 1.png',
          title : 'Lorem ipsum dolor sit amet, consectetu.',
          msg : ''
      },
      {
        id:6,
        name : 'Dorian',
        img: 'vince-fleming-j3lf-Jn6deo-unsplash 1 (1).png',
        title : 'Lorem ipsum dolor sit amet, consectetu.',
        msg : 4
      },
    ]



  return (
    <div>
      <div className={`py-4 sm:px-5 px-3  flex-1 h-screen max-w-full `}>

      <h1 className='shadow py-3 pl-5 lg:rounded-full rounded text-[18px] sm:text-2xl max-w-[100%] font-semibold'>Message</h1>


        <div className='grid md:grid-cols-[45%_55%] lg:grid-cols-[35%_65%] xl:grid-cols-[30%_70%] grid-cols-1'>

          <div className='shadow-lg h-full'>
          <div className='max-w-[100%] shadow-lg'>
          
           <div className='md:max-w-[95%] max-w-[90%] lg:max-w-[90%] mx-auto py-4'>
           <div className='bg-[#F3F3F3] py-2 px-4 rounded-md flex justify-between items-center'>
              <input type="text" placeholder='Search' id='searchplaceholder' className=' font-medium border-none outline-none bg-transparent mr-5' />
              <i className="fa-solid fa-magnifying-glass text-[#A686AD]"></i>
            </div>
           </div>

  
          </div>

         <div className='max-w-[100%] h-auto md:px-2 lg:sm:px-5 px-2 my-10'>
         <div className=''>

            {MessageData.map((value,index) => {
              return(
                <div className='flex items-center justify-around my-7 cursor-pointer' key={index}>
                  <img src={value.img} alt="img" className='h-9 xl:h-full md:h-10' />
                  <div className='md:ml-3 xl:ml-0'>
                    <h2 className='font-semibold text-[14px] xl:text-[17px]'>{value.name}</h2>
                    <p className='text-[10px] sm:text-[12px] font-semibold text-[#A686AD]'>{value.title}</p>
                  </div>
                <p className={`${value.msg!=='' ? 'bg-[#643D6C]' : ''} rounded-full xl:h-7 h-5 lg:w-7 w-5 text-[white] text-center text-[12px] lg:text-[14px]`}>{value.msg}</p>
                </div>
              )
            })}

           </div>
         </div>
</div>








          <div className='hidden md:block'>
          <div className='max-w-[100%] shadow-lg  py-1'>
              <div className='flex items-center justify-between px-10'>
                <div className='flex items-center'>
                <img src={MessageData[2].img} alt="Jake" className='cursor-pointer mt-3'/> 
                <span className='ml-3 font-semibold cursor-pointer'>{MessageData[2].name}</span>
                </div>
                <i className="fa-solid fa-bars cursor-pointer text-2xl text-[#A686AD]"></i>
              </div>
          </div>

          <div className='my-4 max-w-[90%] mx-auto'>
              <div className='max-w-[45%] md:max-w-[100%] lg:max-w-[80%] xl:max-w-[45%] font-semibold text-[13px]'>

                <div className='relative mb-3 shadow-md p-5 rounded-3xl'>
                <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris augue neque.</p>
                <span className='absolute right-5 bottom-2 text-[12px]'>2:01 PM</span>
                </div>

                <div className='shadow-md p-5 rounded-3xl  relative'>

                <p className=''>Lorem ipsum dolor sit amet, consectetur <br />adipiscing </p>
                <span className='absolute right-5 bottom-2 text-[12px]'>2:01 PM</span>
                </div>
              </div>


              <div className='max-w-[100%] font-semibold text-[13px] relative'>
              <img src="Polygon 2.png" className='absolute right-0 top-8' alt="" />
              <div className='my-3 max-w-[45%] md:max-w-[100%] lg:max-w-[80%]  xl:max-w-[45%] shadow-md p-5 rounded-3xl bg-[#643D6C] text-white absolute right-5'>
                  <p className='text-[13px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Sagittis id consectetur purus ut faucibus pulvinar elementum. Auctor augue mauris.</p>
                <span className='absolute right-5 bottom-2 text-[12px]'>3:36 PM</span>
              </div>
              </div>

          </div>

              <div className='max-w-[90%] mx-auto flex relative justify-center items-center'>
                <input type="text" placeholder='Type a message...' className='md:mt-[200px] lg:mt-[200px] xl:mt-[180px] shadow-md rounded-lg w-[90%] mx-auto outline-none px-5 py-2 pr-14'/>
                <i className="fa-solid fa-play text-[20px] absolute md:right-8 lg:right-10 xl:right-16 cursor-pointer bg-white text-[#3d9b3d] bottom-2"></i>
              </div>

          </div>
          
        </div>

      </div>
  </div>
  )
}

export default Message
