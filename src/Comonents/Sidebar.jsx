import React from 'react'

export default function Sidebar() {

  const logout=()=>{
    sessionStorage.clear();
    window.location.reload();
  }

  return (
    <div className="h-[100vh] w-1/5 py-5 bg-[#15202B] text-white flex flex-col items-center">
        
        <div className="w-[95%] h-14 mb-5 flex items-center">
        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/7950F2/yelp.png" alt="yelp"/>
        <b className="ml-3 text-[19px] ">SociWave Admin Panel</b>
        </div>
        
        <div className="w-[95%] mb-5 h-[85vh]" >
          <div className="w-[100%] h-12 bg-slate-800 mt-4 px-4 flex items-center rounded-md">
            <img width="20" height="20" src="https://img.icons8.com/ios/50/FFFFFF/home--v1.png" alt="home--v1"/>
            <b className="ml-5">Dashboard</b>
          </div>
          <div className="w-[100%] h-12 bg-slate-800 mt-4 px-4 flex items-center rounded-md">
            <img width="20" height="20" src="https://img.icons8.com/ios/50/FFFFFF/home--v1.png" alt="home--v1"/>
            <b className="ml-5">Dashboard</b>
          </div>

          <div className="my-2 mx-1 w-[100%] text-gray-400">Admins</div>

          <div className="w-[100%] h-12 bg-slate-800 px-4 flex items-center rounded-md">
            <img width="20" height="20" src="https://img.icons8.com/ios/50/FFFFFF/home--v1.png" alt="home--v1"/>
            <b className="ml-5">Dashboard</b>
          </div>

        </div>

        <div className="w-[95%] h-14  flex justify-around items-center bg-slate-800 rounded-md  " >
          <img className="border-2 border-white rounded-full" width="40" height="40" src="https://img.icons8.com/ios-filled/50/FD7E14/old-man.png" alt="old-man"/>
          <button className="bg-red-500 ml-20 p-1 rounded-md" onClick={logout}>Logout</button>
        </div>
        
      </div>
  )
}
