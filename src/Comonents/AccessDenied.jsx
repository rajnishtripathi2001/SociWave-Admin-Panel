import React from 'react'

export default function AccessDenied() {
  return (
    <div className="min-w-[400px] max-w-[400px] bg-[#15202B] text-white border-2 border-red-500 shadow-[0_0_25px_rgba(0,0,0,0.3)] p-[10px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col">
      <h4 className='text-4xl my-2 text-red-600'>Access Denied</h4>
        <h3 className='text-xl my-2'>You are not authorized to view this page</h3>
        <a href='/' className=' my-2'>Please <span className='text-blue-500'>login</span> to continue</a>
    </div>
  )
}
