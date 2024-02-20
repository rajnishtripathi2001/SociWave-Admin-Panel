import React, { useState } from "react";
import Sidebar from "../Comonents/Sidebar";
import MainScreen from "../Comonents/MainScreen";

export default function Maintenance() {

  const [mode,setMode] = useState(true)

  return (
    <div className="flex">
      <Sidebar />
      <MainScreen>
        <div className="text-white flex flex-col items-center m-5">
          Maintenance Page
          {mode ? (
            <div className="border w-full my-5 p-2 h-[85vh]">
           
            <div className="flex flex-col items-center my-5">
              <img
                width="94"
                height="94"
                src="https://img.icons8.com/3d-fluency/94/hard-working.png"
                alt="hard-working"
              />   
            </div>
            Current Mode : <span className="text-green-500">Active</span>
            <div className="flex flex-col items-center my-5">
              <textarea name="message" id="message" cols="100" rows="5" placeholder="Enter the maintenance message"></textarea>  
              <div className="flex my-2">
              <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">
                Start Maintenance
              </button>
              <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">
                Stop Maintenance
              </button>
              </div>

            </div>
          </div>
          ) : (
            <p>
            unser mentinance
            <img
                width="94"
                height="94"
                src="https://img.icons8.com/external-sapphire-kerismaker/48/external-Maintenence-seo-sem-sapphire-kerismaker.png"
                alt="external-Maintenence-seo-sem-sapphire-kerismaker"
              />
          </p>)}
          
        </div>
      </MainScreen>
    </div>
  );
}
