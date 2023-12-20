import React from 'react'
import Sidebar from '../Comonents/Sidebar'
import MainScreen from '../Comonents/MainScreen'

export default function Orders() {
  return (
    <div className='flex'>
        <Sidebar/>
        <MainScreen>
            Orders page
        </MainScreen>
    </div>
  )
}
