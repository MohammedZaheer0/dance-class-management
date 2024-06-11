import React from 'react';
import './App.css';
import SideBar from './Components/SideBar';
import DashboardOverview from './Components/DashboardOverview';
import Schedule from './Components/Schedule';
import StudentList from './Components/StudentList';
import Message from './Components/Message';
import Payment from './Components/Payment';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const App = () => {
  return ( 
    <>
        <BrowserRouter>
        <div className='flex'>
            <div>
              <SideBar/>
            </div>
            <div className={`absolute sm:left-[16%] left-[21%]`}>
              <Routes>
                    <Route path='/' element={<DashboardOverview/>}></Route> 
                    <Route path='/schedule' element={<Schedule/>}></Route> 
                    <Route path='/studentlist' element={<StudentList/>}></Route> 
                    <Route path='/message' element={<Message/>}></Route> 
                    <Route path='/payment' element={<Payment/>}></Route> 
              </Routes>
            </div>
        </div>
            </BrowserRouter>


       {/* <SideBar/>
       <Routes>
          <Route path='/' element={<DashboardOverview/>}></Route>
          <Route path='/schedule' element={<Schedule/>}></Route>
          <Route path='/studentlist' element={<StudentList/>}></Route>
          <Route path='/message' element={<Message/>}></Route>
          <Route path='/payment' element={<Payment/>}></Route>
       </Routes> */}
    </>
  )
}

export default App
