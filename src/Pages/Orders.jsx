import {React,useEffect,useState} from "react";
import Sidebar from "../Comonents/Sidebar";
import MainScreen from "../Comonents/MainScreen";
import axios from "axios";

export default function Orders() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://flask-backend.up.railway.app/orders')
    .then((response) => {
      setData(response.data.Info.reverse());      
    })
    .catch((error) => {
      console.log(error);
    })
  }, []);



  const orderCompleted = (id,uID) => {
    console.log(id);
    axios.post('https://flask-backend.up.railway.app/delivered',{id,uID})
    .then(() => {
      window.location.reload();
    })
  };
  

  return (
    <div className="flex">
      <Sidebar />
      <MainScreen>
        <b className="text-white">Orders page</b>
        <div className="border overflow-auto">
          <div class="relative overflow-x-auto shadow-md ">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Order Date
                  </th>
                  <th scope="col" class="px-6 py-3">
                    User ID
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Order Type
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Work Link
                  </th>

                  <th scope="col" class="px-6 py-3">
                    Amount
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.orderDate}
                    </td>
                    <td class="px-6 py-4">{item.uID}</td>
                    <td class="px-6 py-4">{item.orderType}</td>
                    <td class="px-6 py-4">{item.workLink}</td>

                    <td class="px-6 py-4">{item.amount}</td>
                    <td class="px-6 py-4">

                      {item.action === "Pending" ? (
                        <button className="bg-blue-500 text-white float-left px-4 py-2 rounded-md" onClick={()=>orderCompleted(item._id,item.uID)} >{item.action}</button>
                      ) : (
                        <button className="bg-green-500 w-[82.38px] text-white float-left px-4 py-2 rounded-md" disabled>{item.action}</button>
                      )}

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </MainScreen>
    </div>
  );
}
