import {React,useState,useEffect} from 'react'
import Sidebar from '../Comonents/Sidebar'
import MainScreen from '../Comonents/MainScreen'
import axios from 'axios';


export default function Transactions() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://flask-backend.up.railway.app/transactions")
      .then((response) => {
        setData(response.data.Info.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const verifyTransaction = (id)=>{
    axios.post("https://flask-backend.up.railway.app/verifyTransaction",{id})
    .then(() => {
      window.location.reload();
    });
  }

  return (
    <div className='flex'>
        <Sidebar/>
        <MainScreen>
        <div className="border overflow-auto w-full">
          <div class="relative overflow-x-auto shadow-md ">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    User ID
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Transaction ID
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Transaction Date
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Verification
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-6 py-4">{item.uID}</td>
                    <td class="px-6 py-4">{item.name}</td>
                    <td class="px-6 py-4">{item.email}</td>
                    <td class="px-6 py-4">{item.transactionID}</td>
                    <td class="px-6 py-4">{item.transactionDate}</td>
                    <td class="px-6 py-4">
                    {item.verification === "Pending" ? (
                        <button
                          className="bg-blue-500 w-[82.38px] text-white float-left px-4 py-2 rounded-md"
                          onClick={() => verifyTransaction(item._id)}
                        >
                          Verify
                        </button>
                      ) : (
                        <button
                          className="bg-red-500  text-white float-left px-4 py-2 rounded-md"
                          disabled
                        >
                          Verified
                        </button>
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
  )
}
