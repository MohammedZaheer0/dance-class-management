import React from 'react';
import './App.css';
import SideBar from './Components/SideBar';
import DashboardOverview from './Components/DashboardOverview';
import Schedule from './Components/Schedule';
import StudentList from './Components/StudentList';
import Message from './Components/Message';
import Payment from './Components/Payment';
import { Routes,Route } from 'react-router-dom';

const App = () => {
  return (
    <>
       <SideBar/>
       <Routes>
          <Route path='/' element={<DashboardOverview/>}></Route>
          <Route path='/schedule' element={<Schedule/>}></Route>
          <Route path='/studentlist' element={<StudentList/>}></Route>
          <Route path='/message' element={<Message/>}></Route>
          <Route path='/payment' element={<Payment/>}></Route>
       </Routes>
    </>
  )
}

export default App
