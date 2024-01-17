import {React,useState} from "react";
import Sidebar from "../Comonents/Sidebar";
import MainScreen from "../Comonents/MainScreen";
import AddMoney from "../Comonents/AddMoney";
import Transactions from "../Comonents/Transactions";

export default function Wallets() {

  const[moneyScreen,setMoneyScreen]=useState(false);
  const[transactionScreen,setTransactionScreen]=useState(false);

  const handleMoneyScreen=()=>{
    setMoneyScreen(true);
    setTransactionScreen(false);
  };

  const handleTransactionScreen=()=>{
    setMoneyScreen(false);
    setTransactionScreen(true);
  };

  return (
    <div className="flex">
      <Sidebar />
      <MainScreen>
        <div className="text-white flex flex-col items-center m-5">
          <b>Wallet Page</b>

          <div className="flex justify-between w-[50%] my-10 ">
            <input
              type="text"
              placeholder="Enter User's Id"
              className="mt-1 p-2 border rounded-md w-[80%] text-black"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Search
            </button>
          </div>

          <div className="w-full flex flex-col">
            <table className="w-full ">
              <tr>
                <td className="border-2 w-1/2 p-1 align-top">
                  ID : <span className="text-blue-500">1234569</span>
                </td>
                <td className="border-2 w-1/2 p-1 align-top">
                  Name : <span className="text-blue-500">Mr. Xyz</span>
                </td>
              </tr>
              <tr>
                <td className="border-2 w-1/2 p-1 align-top">
                  Balance : <span className="text-blue-500">$569</span>
                </td>
                <td className="border-2 w-1/2 p-1 align-top">
                  Spending : <span className="text-blue-500">$856</span>
                </td>
              </tr>
              <tr>
                <td className="border-2 w-1/2 p-1 align-top">
                  Last Transaction Amount :{" "}
                  <span className="text-blue-500">$569</span>
                </td>
                <td className="border-2 w-1/2 p-1 align-top">
                  Last Transaction Date :{" "}
                  <span className="text-blue-500">10-Jan-2024</span>
                </td>
              </tr>
            </table>

            <div className="mt-7 flex">
              <div className="w-4/5 h-[55vh]">
                {moneyScreen ? <AddMoney/> : null}
                {transactionScreen ? <Transactions/> : null}
              </div>
              <div className="content-none h-[100] w-[0.9px] ml-5 bg-gray-600"></div>
              <div className="w-1/5 h-[55vh] px-5">
                <button className="bg-blue-500 text-white px-4 py-2 w-full rounded-md my-1" onClick={handleMoneyScreen} >
                  Add Money
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 w-full rounded-md my-1" onClick={handleTransactionScreen} >
                  See All Transactions
                </button>
                <button className="bg-green-500 text-white px-4 py-2 w-full rounded-md my-1">
                  Activate Wallet
                </button>
                <button className="bg-red-500 text-white px-4 py-2 w-full rounded-md my-1">
                  Seize Wallet
                </button>
              </div>
            </div>
          </div>
        </div>
      </MainScreen>
    </div>
  );
}
