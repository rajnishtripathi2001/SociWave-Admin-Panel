import React from "react";
import Sidebar from "../Comonents/Sidebar";
import MainScreen from "../Comonents/MainScreen";

export default function Clients() {
  return (
    <div className="flex">
      <Sidebar />
      <MainScreen>
        <div className="text-white flex flex-col items-center m-5">
          <b>Client Page</b>
          <div className="flex justify-between w-[50%] my-10 ">
            <input
              type="text"
              placeholder="Enter User's Id"
              className="mt-1 p-2 border rounded-md w-[80%]"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md ">
              Search
            </button>
          </div>
          User's Data
          <table className="w-full ">
            <tr>
              <td className="border-2 w-1/2 p-1 align-top">ID : <span className="text-blue-500">1235</span></td>
              <td className="border-2 w-1/2 p-1 align-top">Wallet : <span className="text-blue-500">$1235</span></td>
            </tr>
            <tr>
              <td className="border-2 w-1/2 p-1 align-top">Name : <span className="text-blue-500">User Singh</span></td>
              <td className="border-2 w-1/2 p-1 align-top">Email : <span className="text-blue-500">user@gmail.com</span></td>
            </tr>
            <tr>
              <td className="border-2 w-1/2 p-1 align-top">Mobile : <span className="text-blue-500">987654321</span></td>
              <td className="border-2 w-1/2 p-1 align-top">Status : <span className="text-blue-500">Active</span></td>
            </tr>
            <tr>
              <td className="border-2 w-1/2 p-1 align-top">Name : <span className="text-blue-500">1235</span></td>
              <td className="border-2 w-1/2 p-1 align-top">Email : <span className="text-blue-500">1235</span></td>
            </tr>
          </table>
          <div className="my-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mx-2">Update</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md mx-2">Delete</button>
            <button className="bg-red-800 text-white px-4 py-2 rounded-md mx-2">Restrict</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md mx-2">Remove Restriction</button>
          </div>
          <div className="my-2 w-full">
          <table className="w-full ">
            <tr>
              <td className="border-2 w-1/2 p-1 align-top">ID : <span className="text-blue-500">1235</span></td>
              <td className="border-2 w-1/2 p-1 align-top">Wallet : <span className="text-blue-500">$1235</span></td>
            </tr>
            <tr>
              <td className="border-2 w-1/2 p-1 align-top">Name : <input type="text" className="w-[90%]" /></td>
              <td className="border-2 w-1/2 p-1 align-top">Email : <input type="text" className="w-[90.8%]" /></td>
            </tr>
            <tr>
              <td className="border-2 w-1/2 p-1 align-top">Mobile : <input type="text" className="w-[88.7%]" /></td>
              <td className="border-2 w-1/2 p-1 align-top">Status : <span className="text-blue-500">Active</span></td>
            </tr>
            <tr>
              <td className="border-2 w-1/2 p-1 align-top">Name : <input type="text" className="w-[90%]" /> </td>
              <td className="border-2 w-1/2 p-1 align-top">Email : <input type="text" className="w-[90.8%]" /></td>
            </tr>
          </table>
          </div>
        </div>
      </MainScreen>
    </div>
  );
}
