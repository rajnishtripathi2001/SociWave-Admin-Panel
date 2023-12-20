import React from 'react'
import Sidebar from '../Comonents/Sidebar'
import MainScreen from '../Comonents/MainScreen'

export default function Maintenance() {
  return (
    <div className='flex'>
        <Sidebar/>
        <MainScreen>
            Maintenance page
        </MainScreen>

      
    </div>
  )
}
