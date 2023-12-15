import React from "react";
import Sidebar from "../../Comonents/Sidebar";
import MainScreen from "../../Comonents/MainScreen";

export default function HomePage() {
  return (
    <div className="flex">
      <Sidebar />
      <MainScreen>
        <div className="flex flex-wrap justify-center w-4/5 bg-[#121212]">
          <a
            href="#a"
            className="bg-[#15202B] text-white w-[33%] my-5 mx-10 h-48 rounded-xl text-center items-center p-[20px] flex flex-col justify-center"
          >
            <img
              className="border-2 border-white rounded-full p-2 mb-5"
              width="94"
              height="94"
              src="https://img.icons8.com/3d-fluency/94/card-wallet.png"
              alt="card-wallet"
            />
            <b>Add Money In Wallet</b>
          </a>
          <a
            href="#b"
            className="bg-[#15202B] text-white w-[33%] my-5 mx-10 h-48 rounded-xl text-center items-center p-[20px] flex flex-col justify-center"
          >
            <img
              className="border-2 border-white rounded-full p-2 mb-5"
              width="94"
              height="94"
              src="https://img.icons8.com/3d-fluency/94/guest-male--v2.png"
              alt="card-wallet"
            />
            <b>Manage User</b>
          </a>
          <a
            href="#b"
            className="bg-[#15202B] text-white w-[33%] my-5 mx-10 h-48 rounded-xl text-center items-center p-[20px] flex flex-col justify-center"
          >
            <img
              className="border-2 border-white rounded-full p-2 mb-5"
              width="94"
              height="94"
              src="https://img.icons8.com/3d-fluency/94/guest-male--v2.png"
              alt="card-wallet"
            />
            <b>Manage User</b>
          </a>
        </div>
      </MainScreen>
    </div>
  );
}

// 16161d
// background-color: #121212;

/*

*/
