import React from 'react'

const StudentList = () => {

  const Dances = ['Dance From','Hip-Hop','Contemporary','Bharatanatyam','Ballet','Lorem','Epsum','Dolor','Lorem'];

  const StudentData = [
    {
      id:1,
      img : 'jake-nackos-IF9TK5Uy-KI-unsplash 1.png',
      name : 'Mirabel',
      danceForm : 'Ballet',
      joiningDate : '30th July, 2021',
      feeStatus : 'Paid'
    },
    {
      id:2,
      img : 'vince-fleming-j3lf-Jn6deo-unsplash 1 (1).png',
      name : 'Zachary Erza',
      danceForm : 'Ballet',
      joiningDate : '31th August, 2020',
      feeStatus : 'Paid'
    },
    {
      id:3,
      img : 'austin-wade-ex6qfO4TPMY-unsplash 1.png',
      name : 'Love Rawlins',
      danceForm : 'Bharatanatyam',
      joiningDate : '30th July, 2021',
      feeStatus : 'Pending'
    },
    {
      id:4,
      img : 'shannon-vandenheuvel-Z9p4M58Hdyo-unsplash 1.png',
      name : 'Katrina Hawkins',
      danceForm : 'Ballet',
      joiningDate : '30th July, 2021',
      feeStatus : 'Paid'
    },
    {
      id:5,
      img : 'austin-wade-X6Uj51n5CE8-unsplash 1.png',
      name : 'Dorian',
      danceForm : 'Ballet',
      joiningDate : '30th July, 2021',
      feeStatus : 'Paid'
    },
    {
      id:6,
      img : 'austin-wade-X6Uj51n5CE8-unsplash 1.png',
      name : 'Firstname',
      danceForm : 'Ballet',
      joiningDate : '30th July, 2021',
      feeStatus : 'Paid'
    },
    {
      id:7,
      img : 'austin-wade-X6Uj51n5CE8-unsplash 1.png',
      name : 'Hamnet Piercer',
      danceForm : 'Contemporary',
      joiningDate : '30th July, 2021',
      feeStatus : 'Pending'
    },
    {
      id:8,
      img : 'austin-wade-ex6qfO4TPMY-unsplash 1.png',
      name : 'Firstname',
      danceForm : 'Contemporary',
      joiningDate : '30th July, 2021',
      feeStatus : 'Paid'
    },
    {
      id:9,
      img : 'vince-fleming-j3lf-Jn6deo-unsplash 1.png',
      name : 'Firstname',
      danceForm : 'Ballet',
      joiningDate : '31th August, 2020',
      feeStatus : 'Paid'
    },
  ]

  return (
    <div>   
   <div className={`py-4 sm:px-5 px-2  flex-1 h-screen max-w-full`}>

        <h1 className='shadow py-3 pl-5 lg:rounded-full rounded text-[18px] sm:text-2xl max-w-[100%] font-semibold'>Student List</h1>

      <div className='max-w-[100%] grid sm:grid-cols-2 grid-cols-1 justify-between  my-5 items-center p-4 shadow-md mb-5'>

        <div className='max-w-[100%]'>

          <h1 className='md:text-4xl text-2xl font-bold text-[#CE00FF]'>143 <span className='sm:text-[15px] text-[#A686AD] text-[13px'>Students</span></h1>

        </div>
        <div className='text-[#A686AD]  flex items-center my-5 sm:my-0 md:justify-end'>
          <span className='font-semibold mr-5'>Sort By:</span>
          <select className='shadow outline-none py-2 px-2 rounded '>
          {Dances.map((value,index) => {
                  return(
              <option value={value} key={index} className='font-semibold py-3 '>{value}</option>
              )
            })}
          </select>
        </div>
      </div>

        <div className='max-w-full mb-10 overflow-x-auto'>

          <table className='w-full border-none '>
            <thead className='hidden sm:table-header-group'>
              <tr className='shadow-lg text-[#A686AD]'>
                <th className='py-1'>Student</th>
                <th>Dance Form</th>
                <th>Joining Date</th>
                <th>Fee Status</th>
              </tr>
            </thead>
            <tbody className='block sm:table-row-group'>
              {StudentData.map((value,index) => {
                return(
                <tr className='shadow-lg my-5' key={index} >
                <td className='py-3 sm:flex block items-center '><img src={value.img} className='sm:mr-2 h-7 sm:h-9' alt="studentimg" /> <span className='font-semibold my-3 text-[13px] md:text-[18px]'>{value.name}</span></td>
                <td className='text-[#A686AD] font-medium text-[13px] md:text-[18px]'>{value.danceForm}</td>
                <td className='text-[#A686AD] font-medium text-[13px] md:text-[18px]'>{value.joiningDate}</td>
                <td className={`${value.feeStatus ===  'Paid' ? 'text-[#04BC00]' : 'text-[#A686AD] '} font-medium text-[13px] md:text-[18px]`}>{value.feeStatus}</td>
              </tr>
                )
              })}
             
            </tbody>
          </table>
        </div>    
      
    </div>
</div>
  )
}

export default StudentList
