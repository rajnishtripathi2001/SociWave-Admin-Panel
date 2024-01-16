import React, { useState } from "react";
import Sidebar from "../Comonents/Sidebar";
import MainScreen from "../Comonents/MainScreen";
import axios from "axios";

export default function Clients() {
  const [id, setId] = useState("");

  const handleinput = (event) => {
    setTempData({ ...temData, [event.target.name]: event.target.value });
  };

  const [temData, setTempData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    email: "",
    status: "",
  });

  const searchUser = async (e) => {
    e.preventDefault();
    await axios
      .post("https://flask-backend.up.railway.app/findUser", { id })
      .then((res) => {
        if (res.data.message === "Successful") {
          setUserData({
            id: res.data.Info._id,
            name: res.data.Info.fname + " " + res.data.Info.lname,
            email: res.data.Info.email,
            status: res.data.Info.status,
          });
          setTempData({
            fname: res.data.Info.fname,
            lname: res.data.Info.lname,
            email: res.data.Info.email,
            password: res.data.Info.password,
          });
        } else {
          alert("No such user with UserID : " + id);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateUser = async (e) => {
    e.preventDefault();
    await axios
      .post("https://flask-backend.up.railway.app/updateUser", { id, temData })
      .then((res) => {
        if (res.data.message === "Successfully updated") {
          alert("User Updated Successfully");
        }
      })
      .catch((err) => {
        console.log("Error : " + err);
      });
  };

  const restrictUser = async () => {
    await axios
      .post("https://flask-backend.up.railway.app/restrictUser", { id })
      .then((res) => {
        if (res.data.message === "Successfully Restricted") {
          alert("User " + id + " Restricted Successfully");
        }
      })
      .catch((err) => {
        console.log("Error : " + err);
      });
  };

  const removeRestriction = async () => {
    await axios
      .post("https://flask-backend.up.railway.app/removeRestriction", { id })
      .then((res) => {
        if (res.data.message === "Successfully Restriction Removed") {
          alert("User " + id + " Restriction Removed Successfully");
        }
        console.log(res);
      })
      .catch((err) => {
        console.log("Error : " + err);
      });
  };

  const deleteUser = async () => {
    await axios
      .post("https://flask-backend.up.railway.app/deleteUser", { id })
      .then((res) => {
        if (res.data.message === "Successfully Deleted") {
          alert("User " + id + " Deleted Successfully");
        }
        window.location.reload()
      })
      .catch((err) => {
        console.log("Error : " + err);
      });
  };

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
              className="mt-1 p-2 border rounded-md w-[80%] text-black"
              onChange={(e) => setId(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={searchUser}
            >
              Search
            </button>
          </div>
          User's Data
          <table className="w-full ">
            <tr>
              <td className="border-2 w-1/2 p-1 align-top">
                ID : <span className="text-blue-500">{userData.id}</span>
              </td>
              <td className="border-2 w-1/2 p-1 align-top">
                Name : <span className="text-blue-500">{userData.name}</span>
              </td>
            </tr>
            <tr>
              <td className="border-2 w-1/2 p-1 align-top">
                Email : <span className="text-blue-500">{userData.email}</span>
              </td>

              <td className="border-2 w-1/2 p-1 align-top">
                Status :{" "}
                <span className="text-blue-500">{userData.status}</span>
              </td>
            </tr>
          </table>
          <div className="my-2">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md mx-2"
              onClick={deleteUser}
            >
              Delete
            </button>
            <button
              className="bg-red-800 text-white px-4 py-2 rounded-md mx-2"
              onClick={restrictUser}
            >
              Restrict
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md mx-2"
              onClick={removeRestriction}
            >
              Remove Restriction
            </button>
          </div>
          <div className="my-2 w-full">
            <table className="w-full ">
              <tr>
                <td className="border-2 w-1/2 p-1 align-top">
                  ID : <span className="text-blue-500">{userData.id}</span>
                </td>
                <td className="border-2 w-1/2 p-1 align-top">
                  Email :{" "}
                  <input
                    type="text"
                    name="email"
                    className="w-[90.8%] text-black"
                    value={temData.email}
                    onChange={handleinput}
                  />
                </td>
              </tr>
              <tr>
                <td className="border-2 w-1/2 p-1 align-top">
                  First Name :{" "}
                  <input
                    type="text"
                    name="fname"
                    className="w-[83.8%] text-black"
                    value={temData.fname}
                    onChange={handleinput}
                  />
                </td>
                <td className="border-2 w-1/2 p-1 align-top">
                  Last Name :{" "}
                  <input
                    type="text"
                    name="lname"
                    className="w-[83.8%] text-black"
                    value={temData.lname}
                    onChange={handleinput}
                  />
                </td>
              </tr>
              <tr>
                <td className="border-2 w-1/2 p-1 align-top">
                  Password :{" "}
                  <input
                    type="text"
                    name="password"
                    className="w-[85.6%] text-black"
                    value={temData.password}
                    onChange={handleinput}
                  />
                </td>
                <td className="border-2 w-1/2 p-1 align-top">
                  Status :{" "}
                  <span className="text-blue-500">{userData.status}</span>
                </td>
              </tr>
            </table>
          </div>
          <button
            className="bg-blue-500 text-white my-2 px-4 py-2 rounded-md mx-2"
            onClick={updateUser}
          >
            Update
          </button>
        </div>
      </MainScreen>
    </div>
  );
}
