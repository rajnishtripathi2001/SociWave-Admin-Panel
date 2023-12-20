import React from 'react'
import Sidebar from '../Comonents/Sidebar'
import MainScreen from '../Comonents/MainScreen'

export default function Wallets() {
  return (
    <div className='flex'>
        <Sidebar/>
        <MainScreen>
            Wallets page
        </MainScreen>
    </div>
  )
}
