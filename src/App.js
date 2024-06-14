import React from 'react';
import './App.css';
import SideBar from './Components/SideBar';
import DashboardOverview from './Components/DashboardOverview';
import Schedule from './Components/Schedule';
import StudentList from './Components/StudentList';
import Message from './Components/Message';
import Payment from './Components/Payment';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    // Routing page
    <BrowserRouter>
      <div className="flex">
        <SideBar />
        <div className="flex-1 ml-[10%] sm:ml-[6%] md:ml-[5%]">
          <Routes>
            <Route path="/" element={<DashboardOverview />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/studentlist" element={<StudentList />} />
            <Route path="/message" element={<Message />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
