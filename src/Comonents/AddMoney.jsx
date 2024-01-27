import axios from "axios";
import { React, useState } from "react";

export default function AddMoney(props) {
  const [addState, setAddState] = useState(false);
  const [amount, setAmount] = useState();

  const date = new Date();
  const options = { timeZone: "Asia/Kolkata" };
  const formattedDate = date.toLocaleDateString(undefined, options);

  const handleAddMoney = (Task) => {

    setAddState(true);

    let Final  = Number(amount) + Number(props.balance);
    let list = {task: Task, id: props.id, amount: Final};
    axios.post("https://flask-backend.up.railway.app/updateWallet",{list})
    .then((res)=>{
      if(res.data.message === "Successfully Updated the wallet"){
        alert(res.data.message)
        
      }
    })
    .catch((err)=>{
      console.log(err)
    })
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
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
          <button
            className="bg-blue-500 w-1/5 h-3/4 text-white px-4 py-2 rounded-md "
            onClick={()=>{handleAddMoney("addMoney")}}
          >
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
            <span className="text-blue-500">{formattedDate}</span>
            <br />
            <b>Total Amount : </b>{" "}
            <span className="text-blue-500">{amount}</span>
            <br />
          </div>
        </div>
      ) : null}
    </div>
  );
}
