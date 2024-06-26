import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => {

    const [open,setOpen] = useState(false);

  return (
    <>
        <div className='h-screen fixed bg-[white] z-50'>

        <div className={`${open ? 'w-64' : 'w-12'}   duration-300 relative flex items-center`}>

            {/* SideBar Logo Div */}
            <div className={`${open ? 'pl-7 top-5 absolute' : 'hidden'}`}>

            <h2 className='text-4xl font-bold text-[#CE00FF]'>icon</h2>
            <p className='text-[12px] text-[#A686AD]'>placeholder subtext</p>
            </div>
            
        <i className={`fa-solid fa-grip-lines absolute cursor-pointer right-1 top-7 w-7 text-3xl text-[#CE00FF] ${open ? 'rotate-90' : ''}`} onClick={() => setOpen(!open)}></i>
        </div>


      {/* Side Bar Icons Div */}
       <div className={`pt-[100px] ${open ? 'w-64' : 'w-12'}`}>


        <NavLink activeclass='active' to='/'>
       <div className='flex px-4 py-3 rounded-full justify-start items-center my-3 cursor-pointer hover:text-[#CE00FF]'>
        <i className="fa-solid fa-file-invoice mr-5 text-2xl"></i>
        <h2 className={`font-semibold ${!open ? 'hidden' : 'flex'}`}>Overview</h2>
        </div>
        </NavLink>


        <NavLink activeclass='active' to='/schedule'>
        <div className='flex px-4 py-3 rounded-full justify-start items-center my-3 cursor-pointer  hover:text-[#CE00FF]'>
        <i className="fa-solid fa-calendar-days mr-5 text-2xl"></i>
        <h2 className={`font-semibold ${!open ? 'hidden' : 'flex'}`}>Schedule</h2>
        </div>
        </NavLink>
       
       
        <NavLink activeclass='active' to='/studentlist'>
        <div className='flex px-4 py-3 rounded-full justify-start items-center my-3 cursor-pointer  hover:text-[#CE00FF]'>
        <i className="fa-solid fa-user-tie mr-5 text-2xl"></i>
        <h2 className={`font-semibold ${!open ? 'hidden' : 'flex'}`}>Student List</h2>
        </div>
        </NavLink>
       
       
        <NavLink activeclass='active' to='/message'>
        <div className='flex px-4 py-3 rounded-full justify-start items-center my-3 cursor-pointer hover:text-[#CE00FF]'>
        <i className="fa-regular fa-comment-dots mr-5 text-2xl"></i>
        <h2 className={`font-semibold ${!open ? 'hidden' : 'flex'}`}>Messages</h2>
        </div>
        </NavLink>


        <NavLink activeclass='active' to='/payment'>
        <div className='flex px-4 py-3 rounded-full justify-start items-center my-3 cursor-pointer hover:text-[#CE00FF]'>
        <i className="fa-solid fa-sack-dollar mr-5 text-2xl"></i>
        <h2 className={`font-semibold ${!open ? 'hidden' : 'flex'}`}>Payment Info</h2>
        </div>
        </NavLink>

       </div>

        </div>
        
    </>
  )
}

export default SideBar
