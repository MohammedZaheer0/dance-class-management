import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => {

    const [open,setOpen] = useState(true);
    const Dances = ['Hip-Hop','Contemporary','Bharatanatyam','Ballet','Lorem','Epsum','Dolor','Lorem'];

  return (
    <>
    <div className='flex'>
        <div className='h-screen'>

        <div className={`${open ? 'w-72' : 'w-20'} duration-300 relative flex items-center`}>

            <div className={`${open ? 'pl-7 top-5 absolute' : 'hidden'}`}>

            <h2 className='text-4xl font-bold text-[#CE00FF]'>icon</h2>
            <p className='text-[12px] text-[#A686AD]'>placeholder subtext</p>
            </div>
            
        <i className={`fa-solid fa-grip-lines absolute cursor-pointer right-5 top-7 w-7 text-3xl text-[#CE00FF] ${open ? 'rotate-90' : ''}`} onClick={() => setOpen(!open)}></i>
        </div>


       <div className='pt-[100px]'>


        <NavLink activeclass='active' to='/'>
       <div className='flex px-7 py-3 rounded-full justify-start items-center my-3 cursor-pointer hover:bg-[#FEF7FF] hover:text-[#CE00FF]'>
        <i className="fa-solid fa-file-invoice mr-5 text-2xl"></i>
        <h2 className={`font-semibold ${!open ? 'hidden' : 'flex'}`}>Overview</h2>
        </div>
        </NavLink>


        <NavLink activeclass='active' to='/schedule'>
        <div className='flex px-7 py-3 rounded-full justify-start items-center my-3 cursor-pointer hover:bg-[#FEF7FF] hover:text-[#CE00FF]'>
        <i className="fa-solid fa-calendar-days mr-5 text-2xl"></i>
        <h2 className={`font-semibold ${!open ? 'hidden' : 'flex'}`}>Schedule</h2>
        </div>
        </NavLink>
       
       
        <NavLink activeclass='active' to='/studentlist'>
        <div className='flex px-7 py-3 rounded-full justify-start items-center my-3 cursor-pointer hover:bg-[#FEF7FF] hover:text-[#CE00FF]'>
        <i className="fa-solid fa-user-tie mr-5 text-2xl"></i>
        <h2 className={`font-semibold ${!open ? 'hidden' : 'flex'}`}>Student List</h2>
        </div>
        </NavLink>
       
       
        <NavLink activeclass='active' to='/message'>
        <div className='flex px-7 py-3 rounded-full justify-start items-center my-3 cursor-pointer hover:bg-[#FEF7FF] hover:text-[#CE00FF]'>
        <i className="fa-regular fa-comment-dots mr-5 text-2xl"></i>
        <h2 className={`font-semibold ${!open ? 'hidden' : 'flex'}`}>Messages</h2>
        </div>
        </NavLink>


        <NavLink activeclass='active' to='/payment'>
        <div className='flex px-7 py-3 rounded-full justify-start items-center my-3 cursor-pointer hover:bg-[#FEF7FF] hover:text-[#CE00FF]'>
        <i className="fa-solid fa-sack-dollar mr-5 text-2xl"></i>
        <h2 className={`font-semibold ${!open ? 'hidden' : 'flex'}`}>Payment Info</h2>
        </div>
        </NavLink>

       </div>

        </div>



        <div className={`py-4 px-5 text-2xl font-semibold flex-1 h-screen `}>
            <h1 className='shadow py-3 pl-5 rounded-full'>Dashboard Overview</h1>

            <div className='grid grid-cols-2 my-7 gap-4 '>
                
                <div className='shadow-lg rounded'>
                    <h1 className='pl-7 py-5'>Classes Today</h1>
                    <div>

                        <div className='w-[90%] mx-auto my-4 flex justify-between px-5 rounded shadow py-2 items-center bg-[#FEF7FF]'>
                            <div>
                                <h2>Contemporary</h2>
                                <h3 className='text-[15px] text-[#A686AD]'>21 Students</h3>
                            </div>
                            <p className='text-[15px] text-[#A686AD]'>10 AM - 11.30 AM</p>
                        </div>

                        <div className='w-[90%] mx-auto my-4 flex justify-between px-5 rounded shadow py-2 items-center bg-[#FEF7FF]'>
                            <div>
                                <h2 className=''>Ballet</h2>
                                <h3 className='text-[15px] text-[#A686AD]'>12 Students</h3>
                            </div>
                            <p className='text-[15px] text-[#A686AD]'>3 PM - 4.30 PM</p>
                        </div>


                        <div className='w-[90%] mx-auto my-4 flex justify-between px-5 rounded shadow py-2 items-center bg-[#FEF7FF]'>
                            <div>
                                <h2>Hip-Hop</h2>
                                <h3 className='text-[15px] text-[#A686AD]'>37 Students</h3>
                            </div>
                            <p className='text-[15px] text-[#A686AD]'>6.30 PM - 7.30 PM</p>
                        </div>
                    </div>
                </div>

                
                <div className='shadow-lg rounded'>
                    <h1 className='pl-7 py-5'>Student Status</h1>
                    <img src="graph.png" className='w-[90%] mx-auto mb-5' alt="GraphImg" />
                </div>

            </div>



            <div className='w-[100%] mx-auto grid grid-cols-3 justify-between gap-7'>

            <div className='shadow-lg px-5 mb-5'>
                <h2 className='text-xl pt-4'>Revenue</h2>

                <div className='py-5'>
                <h1 className='text-4xl'> <i class="fa-solid fa-indian-rupee-sign"></i> 10,500</h1>
                <p className='text-[15px] text-[#A686AD]'>This month's revenue so far</p>
                </div>

                <div className='pb-5'>
                    <h1 className='text-4xl'><i class="fa-solid fa-indian-rupee-sign"></i> 75,000</h1>
                    <p className='text-[15px] text-[#A686AD]'>Previous month</p>
                </div>

                <div className='flex mb-2 mt-3 '>
                    <div className='mr-[20%] bg-[#FEF7FF] rounded px-5 py-3'>
                        <h1 className='text-5xl'>35</h1>
                        <p className='text-[15px] text-[#A686AD]'>Student</p>
                        <p className='text-[15px] text-[#04BC00]'>Have Paid</p>
                    </div>
                    <div className='bg-[#FEF7FF] px-5 py-3 rounded'>
                        <h1 className='text-5xl'>108</h1>
                        <p className='text-[15px] text-[#A686AD]'>Students <br /> Yet to Pay</p>
                    </div>
                </div>
                
            </div>


            <div className='shadow-lg px-5 mb-5'>
                <h3 className='text-xl pt-4'>Top Dance forms</h3>
                <div className='px-5'>
                <ol style={{listStyleType:'decimal'}}>
                    {Dances.map((item, index) => (
                        <li key={index} typeof='number' className='text-xl my-3 text-[#A686AD]'>{item}</li>
                    ))}
                </ol>
                </div>
            </div>


            <div className='shadow-lg px-5 h-fit'>
                <h2 className='text-xl pt-4'>Class Hours</h2>
                <p className='my-3 text-[#A686AD] text-xl'><span className='text-5xl text-black'>31</span>hr <span className='text-black text-5xl'> 45</span>min</p>
                <p className='text-[15px] text-[#A686AD]'>Of dance classes taken <br /> this month so far</p>
            </div>

            </div>

        </div>
    </div>
    </>
  )
}

export default SideBar
