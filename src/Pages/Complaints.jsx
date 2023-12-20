import React from 'react'
import Sidebar from '../Comonents/Sidebar'
import MainScreen from '../Comonents/MainScreen'

export default function Complaints() {
  return (
    <div className='flex'>
        <Sidebar/>
        <MainScreen>
            Complaints page
        </MainScreen>
    </div>
  )
}
