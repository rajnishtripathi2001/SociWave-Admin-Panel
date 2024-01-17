import { React, useState } from "react";

export default function AddMoney() {
  const [addState, setAddState] = useState(false);

  const handleAddMoney = () => {
    setAddState(true);
  };
  return (
    <div className="border h-[55vh]">
      <div className="w-full items-center text-center flex flex-col">
        <b className="my-5">Add Money to the user's account</b>
        <div className="flex justify-around items-center w-[30vw]">
          <input
            type="number"
            className="w-3/5 h-10 border-2 text-black border-gray-400 rounded-md my-2 px-2"
            placeholder="Enter Amount"
          />
          <button className="bg-blue-500 w-1/5 h-3/4 text-white px-4 py-2 rounded-md " onClick={handleAddMoney}>
            Add
          </button>
        </div>
      </div>
      {addState ? (
        <div className="text-center h-[44vh] mt-5 flex flex-col items-center">
          <b>Transcation Report</b>
          <img
            className="mt-2"
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/40C057/checked--v1.png"
            alt="checked--v1"
          />
          <p className="text-white">Transaction Successful</p>
          <div className="text-left mt-2">
            <b>Transaction Date : </b>{" "}
            <span className="text-blue-500">10-Jan-2024</span>
            <br />
            <b>Transaction ID : </b>{" "}
            <span className="text-blue-500">123456789</span>
            <br />
            <b>Toatal Amount : </b> <span className="text-blue-500">$569</span>
            <br />
            <b>Admin ID : </b> <span className="text-blue-500">123456789</span>
            <br />
          </div>
        </div>
      ) : null}
    </div>
  );
}
