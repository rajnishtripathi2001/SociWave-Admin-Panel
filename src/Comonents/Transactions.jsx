import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Transactions({walletID}) {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.post("https://flask-backend.up.railway.app/allTransactions",{walletID})
    .then((res)=>{
      setData(res.data.result)
    })
    .catch(()=>{
      console.log("Some Error")
    })
  }, []);
  
  return (
    <div className="border h-[55vh] overflow-auto">
      <div class="relative overflow-x-auto shadow-md ">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" class="px-6 py-3">
                ID
              </th>
              <th scope="col" class="px-6 py-3">
                Transaction Date
              </th>
              <th scope="col" class="px-6 py-3">
                Transaction/UPI ID
              </th>
              <th scope="col" class="px-6 py-3">
                Verification
              </th>   
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item._id}
                </td>
                <td class="px-6 py-4">{item.transactionDate}</td>
                <td class="px-6 py-4">{item.transactionID}</td>
                <td class="px-6 py-4">{item.verification}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
