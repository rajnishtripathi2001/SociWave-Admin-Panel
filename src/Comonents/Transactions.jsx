import React from "react";

const data = [
  {
    date: "10-Jan-2024",
    transactionId: "123456789",
    type: "Credit",
    amount: "$569",
  },
  {
    date: "10-Jan-2024",
    transactionId: "123456790",
    type: "Debit",
    amount: "$509",
  },
  {
    date: "10-Jan-2024",
    transactionId: "123456791",
    type: "Credit",
    amount: "$569",
  },
  {
    date: "10-Jan-2024",
    transactionId: "123456792",
    type: "Credit",
    amount: "$569",
  },
  {
    date: "10-Jan-2024",
    transactionId: "123456793",
    type: "Credit",
    amount: "$569",
  },
  {
    date: "10-Jan-2024",
    transactionId: "123456794",
    type: "Credit",
    amount: "$569",
  },
  {
    date: "10-Jan-2024",
    transactionId: "123456795",
    type: "Credit",
    amount: "$569",
  },
  {
    date: "10-Jan-2024",
    transactionId: "123456796",
    type: "Credit",
    amount: "$569",
  },
  {
    date: "10-Jan-2024",
    transactionId: "123456797",
    type: "Credit",
    amount: "$569",
  },
  {
    date: "10-Jan-2024",
    transactionId: "123456798",
    type: "Credit",
    amount: "$569",
  },
];

export default function Transactions() {
  return (
    <div className="border h-[55vh] overflow-auto">
      <div class="relative overflow-x-auto shadow-md ">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Transaction Date
              </th>
              <th scope="col" class="px-6 py-3">
                Transaction ID
              </th>
              <th scope="col" class="px-6 py-3">
                Type
              </th>
              <th scope="col" class="px-6 py-3">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.date}
                </td>
                <td class="px-6 py-4">{item.transactionId}</td>
                <td class="px-6 py-4">{item.type}</td>
                <td class="px-6 py-4">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
