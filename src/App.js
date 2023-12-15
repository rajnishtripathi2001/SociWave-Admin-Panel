import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Login from "./Pages/LoginPage/Login";

function App() {

  // sessionStorage.setItem('loginStatus',true);

  const[loginStatus,setLoginStatus] = useState(true)
  
  useEffect(() => {
    setLoginStatus(sessionStorage.getItem('loginStatus'))
  },[]);

  return (
    <>
      <Routes>
        <Route path="/" exact element={loginStatus ? <HomePage/> : <Login/>} />
        <Route path="/" exact element={loginStatus ? <HomePage/> : <Login/>} />
        <Route path="*" element={<h1>Not Found</h1>} />

      </Routes>
    </>
  );
};

export default App;
