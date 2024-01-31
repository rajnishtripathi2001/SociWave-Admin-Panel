import { React, useState } from "react";
import Sidebar from "../Comonents/Sidebar";
import MainScreen from "../Comonents/MainScreen";
import AddMoney from "../Comonents/AddMoney";
import Transactions from "../Comonents/Transactions";
import axios from "axios";

export default function Wallets() {
  const [moneyScreen, setMoneyScreen] = useState(false);
  const [transactionScreen, setTransactionScreen] = useState(false);
  const [walletID, setWalletID] = useState("");
  const [walletStatus, setWalletStatus] = useState(false);

  const handleMoneyScreen = () => {
    setMoneyScreen(true);
    setTransactionScreen(false);
  };

  const handleTransactionScreen = () => {
    setMoneyScreen(false);
    setTransactionScreen(true);
  };

  const [userData, setUserData] = useState({
    id: "",
    status: "",
    balance: "",
    spending: "",
    lastTrans: "",
    lastDate: "",
  });

  const findWallet = () => {
    if (walletID === "") {
      alert("Please Enter the wallet ID");
    }
    axios
      .post("https://flask-backend.up.railway.app/findWallet", { walletID })
      .then((response) => {
        if (response.data.message === "Found") {
          setUserData({
            id: response.data.result._id,
            status: response.data.result.walletstatus,
            balance: response.data.result.balance,
            spending: response.data.result.spending,
            lastTrans: response.data.result.lastTransaction,
            lastDate: response.data.result.lastTransactionDate,
          });
          setWalletStatus(true);
        } else {
          alert(response.data.message);
          setUserData("");
          setWalletStatus(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let addMoneyProp = {
    id: walletID,
    balance: userData.balance,
  };

  const walletState = (command) => {
    let task = {
      id: walletID,
      state: command,
    };
    axios
      .post("https://flask-backend.up.railway.app/walletState", { task })
      .then((res) => {
        alert("Wallet Status Updated");
      })
      .catch((err) => {
        console.log(err);
      });
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
              onChange={(event) => setWalletID(event.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={findWallet}
            >
              Search
            </button>
          </div>

          <div className="w-full flex flex-col">
            <table className="w-full ">
              <tr>
                <td className="border-2 w-1/2 p-1 align-top">
                  ID : <span className="text-blue-500">{userData.id}</span>
                </td>
                <td className="border-2 w-1/2 p-1 align-top">
                  Status :{" "}
                  <span className="text-blue-500">{userData.status}</span>
                </td>
              </tr>
              <tr>
                <td className="border-2 w-1/2 p-1 align-top">
                  Balance :{" "}
                  <span className="text-blue-500">{userData.balance}</span>
                </td>
                <td className="border-2 w-1/2 p-1 align-top">
                  Spending :{" "}
                  <span className="text-blue-500">{userData.spending}</span>
                </td>
              </tr>
              <tr>
                <td className="border-2 w-1/2 p-1 align-top">
                  Last Transaction Amount :{" "}
                  <span className="text-blue-500">{userData.lastTrans}</span>
                </td>
                <td className="border-2 w-1/2 p-1 align-top">
                  Last Transaction Date :{" "}
                  <span className="text-blue-500">{userData.lastDate}</span>
                </td>
              </tr>
            </table>

            <div className="mt-7 flex">
              <div className="w-4/5 h-[55vh]">
                {moneyScreen ? <AddMoney {...addMoneyProp} /> : null}
                {transactionScreen ? (
                  <Transactions walletID={walletID} />
                ) : null}
              </div>
              <div className="content-none h-[100] w-[0.9px] ml-5 bg-gray-600"></div>
              <div className="w-1/5 h-[55vh] px-5">
                {walletStatus ? (
                  <>
                    <button
                      className="bg-blue-500 text-white px-4 py-2 w-full rounded-md my-1"
                      onClick={handleMoneyScreen}
                    >
                      Add Money
                    </button>
                    <button
                      className="bg-blue-500 text-white px-4 py-2 w-full rounded-md my-1"
                      onClick={handleTransactionScreen}
                    >
                      See All Transactions
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="bg-gray-500 text-white line-through px-4 py-2 w-full rounded-md my-1"
                      disabled
                    >
                      Add Money
                    </button>
                    <button
                      className="bg-gray-500 text-white line-through px-4 py-2 w-full rounded-md my-1"
                      disabled
                    >
                      See All Transactions
                    </button>
                  </>
                )}

                <button
                  className="bg-green-500 text-white px-4 py-2 w-full rounded-md my-1"
                  onClick={() => walletState("Active")}
                >
                  Activate Wallet
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 w-full rounded-md my-1"
                  onClick={() => walletState("Seized")}
                >
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
