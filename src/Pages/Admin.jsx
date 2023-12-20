import React from 'react'
import Sidebar from '../Comonents/Sidebar'
import MainScreen from '../Comonents/MainScreen'

export default function Admin() {
  return (
    <div className='flex'>
        <Sidebar/>
        <MainScreen>
            Admin page
        </MainScreen>
      
    </div>
  )
}
