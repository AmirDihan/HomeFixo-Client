import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify'

const MainLayouot = () => {
  return (
    <div>
        <div>
            <Navbar></Navbar>
        </div>
        <div className='max-w-300 mx-auto'>
            <Outlet></Outlet>
        </div>
        <div>
            
        </div>
        <ToastContainer />
    </div>
  )
}

export default MainLayouot