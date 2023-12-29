import axios from "axios";
import React, { useState } from "react";

export default function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const login = async (e) => {
    e.preventDefault();
    if (data.username === "" || data.password === "") {
      alert("Please enter all the fields");
      return;
    } else {
      await axios
        .post("https://flask-production-2843.up.railway.app/login", data) // https://flask-production-2843.up.railway.app/login
        .then((response) => {
          console.log(response);
          if (response.data.message === "Successful") {
            sessionStorage.setItem("loginStatus", response.data.login);
            sessionStorage.setItem("ID", response.data.ID);
          } else{
            alert("Invalid Credentials");
          }
        })
        .catch((error) => {
          console.log(error);
        });

      window.location.reload();
    }
  };

  return (
    <div className="min-w-[300px] max-w-[400px] bg-[#15202B] text-white border-2 border-green-500 shadow-[0_0_25px_rgba(0,0,0,0.3)] p-[10px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col">
      <div className="text-2xl">SociWave Admin Panel</div>
      <form onSubmit={login}>
        <input
          className="border-2 w-[100%] text-black p-2 my-2"
          name="username"
          type="text"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          className="border-2 w-[100%] text-black p-2 my-2"
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button
          className="w-[100%] bg-green-500 p-2 text-white rounded-md "
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
