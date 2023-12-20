import React from 'react'
import Sidebar from '../Comonents/Sidebar'
import MainScreen from '../Comonents/MainScreen'


export default function Clients() {
  return (
    <div className='flex'>
        <Sidebar/>
        <MainScreen>
            Clients page
        </MainScreen>
      
    </div>
  )
}
