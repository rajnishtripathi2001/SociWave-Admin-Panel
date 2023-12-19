import React from "react";
import Sidebar from "../../Comonents/Sidebar";
import MainScreen from "../../Comonents/MainScreen";

export default function HomePage() {
  const userdata = [
    {
      name: "user1",
      query: "Payment not received",
      date: "12/12/2021",
    },
    {
      name: "user2",
      query: "Wallet not working",
      date: "12/15/2021",
    },
    {
      name: "user3",
      query: "login issue",
      date: "12/16/2021",
    },
    {
      name: "user4",
      query: "Payment not received",
      date: "12/12/2021",
    },
    {
      name: "user5",
      query: "Wallet not working",
      date: "12/15/2021",
    },
    {
      name: "user6",
      query: "login issue",
      date: "12/16/2021",
    },
    {
      name: "user7",
      query: "Payment not received",
      date: "12/12/2021",
    },
    {
      name: "user8",
      query: "Wallet not working",
      date: "12/15/2021",
    },
    {
      name: "user9",
      query: "login issue",
      date: "12/16/2021",
    },
    {
      name: "user10",
      query: "Payment not received",
      date: "12/12/2021",
    },
    {
      name: "user11",
      query: "Wallet not working",
      date: "12/15/2021",
    },
    {
      name: "user12",
      query: "login issue",
      date: "12/16/2021",
    },
    {
      name: "user13",
      query: "Payment not received",
      date: "12/12/2021",
    },
    {
      name: "user14",
      query: "Wallet not working",
      date: "12/15/2021",
    },
    {
      name: "user15",
      query: "login issue",
      date: "12/16/2021",
    },
    {
      name: "user16",
      query: "Payment not received",
      date: "12/12/2021",
    },
    {
      name: "user17",
      query: "Wallet not working",
      date: "12/15/2021",
    },
    {
      name: "user18",
      query: "login issue",
      date: "12/16/2021",
    },
    {
      name: "user19",
      query: "Payment not received",
      date: "12/12/2021",
    },
    {
      name: "user20",
      query: "Wallet not working",
      date: "12/15/2021",
    }
  ];

  // console.log(userdata);

  return (
    <div className="flex">
      <Sidebar />
      <MainScreen>
        <div className="flex flex-wrap justify-center">
          <a
            href="#a"
            className="bg-[#15202B] w-[25%] text-white my-5 mx-5 h-48 rounded-xl text-center items-center p-[20px] flex flex-col justify-center"
          >
            <img
              className="p-2 mb-5"
              width="100"
              height="100"
              src="https://img.icons8.com/3d-fluency/94/card-wallet.png"
              alt="card-wallet"
            />
            <b>Add Money In Wallet</b>
          </a>

          <a
            href="#a"
            className="bg-[#15202B] w-[25%] text-white my-5 mx-5 h-48 rounded-xl text-center items-center p-[20px] flex flex-col justify-center"
          >
            <img
              className=" mb-5"
              width="100"
              height="100"
              src="https://img.icons8.com/bubbles/50/user.png"
              alt="card-wallet"
            />
            <b>Manage Users</b>
          </a>

          <a
            href="#a"
            className="bg-[#15202B] w-[25%] text-white my-5 mx-5 h-48 rounded-xl text-center items-center p-[20px] flex flex-col justify-center"
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
        </div>

        <hr className="text-black" />
        <div className="text-white py-5 text-center">
          <h1 className="text-white text-4xl mb-5">
            Customers Queries and Complaints
          </h1>
          <div className="mx-2 h-[53.6vh] overflow-auto">
            <div className="w-[100%] h-16 flex justify-around items-center text-white bg-[#15202B] my-2 ">
              <b>Name</b>
              <b>Query</b>
              <b>Date</b>
            </div>

            {userdata.map((user) => {
              return (
                <div className="w-[100%] h-16 flex justify-around items-center text-white bg-[#15202B] rounded-lg my-2 ">
                  <p className="w-[30%]">{user.name}</p>
                  <p className="w-[30%]">{user.query}</p>
                  <p className="w-[30%]">{user.date}</p>
                </div>
              );
            })}
            

          </div>
        </div>
      </MainScreen>
    </div>
  );
}
