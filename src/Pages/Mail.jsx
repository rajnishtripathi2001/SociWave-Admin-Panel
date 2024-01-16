import { React, useState } from "react";
import Sidebar from "../Comonents/Sidebar";
import MainScreen from "../Comonents/MainScreen";
import axios from "axios";

export default function Mail() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (to === "" || subject === "" || message === "") {
      alert("Please enter all the fields");
      return;
    } else {
      const data = { to, subject, message };
      await axios
        .post("https://flask-backend.up.railway.app/sendEmail", data)
        .then((response) => {
          if (response.data.message === "Successful") {
            alert("Email sent");
          } else {
            alert("Email not sent");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // window.location.reload();
  };

  return (
    <div className="flex">
      <Sidebar />
      <MainScreen>
        <div className="mx-5 mt-8 p-8 h-[90vh] border rounded-md shadow-md ">
          <h2 className="text-2xl font-semibold mb-4 text-center text-white">
            Send Email
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="to"
                className="block text-sm font-medium text-gray-300"
              >
                To:
              </label>
              <input
                type="email"
                id="to"
                required
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="mt-1 p-2 border w-full rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-300"
              >
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="mt-1 p-2 border w-full rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300"
              >
                Message:
              </label>
              <textarea
                id="message"
                rows="11"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 p-2 border w-full rounded-md"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Send Email
            </button>
          </form>
        </div>
      </MainScreen>
    </div>
  );
}
