import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Mail from "./Pages/Mail";
import Clients from "./Pages/Clients";
import Orders from "./Pages/Orders";
import Wallets from "./Pages/Wallets";
import Complaints from "./Pages/Complaints";
import Admin from "./Pages/Admin";
import Maintenance from "./Pages/Maintenance";



function App() {

  const[loginStatus,setLoginStatus] = useState(true);
  const[screenWidth,setScreenWidth] = useState();
  
  useEffect(() => {
    setLoginStatus(sessionStorage.getItem('loginStatus'))
  },[]);

  useEffect(() => {
    const isSmallScreen = window.innerWidth<640;

    setScreenWidth(isSmallScreen);
    
  }, []);




  return (
    <>
    {screenWidth ? (
      <div className="bg-red-500 w-[80%] text-white text-center p-6 rounded-md shadow-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <img width="80" height="80" src="https://img.icons8.com/ios-filled/50/FAB005/error--v1.png" alt="error--v1"/> <br />
        <p>Sorry, this website is not accessible on small-width devices. Please use a PC, laptop, or tablet for the best experience.</p>
      </div>

    ):(
      <Routes>
        <Route path="/" exact element={loginStatus ? <HomePage/> : <Login/>} />
        <Route path="/dashboard" exact element={loginStatus ? <HomePage/> : <Login/>} />
        <Route path="/mail" element={<Mail/>} />
        <Route path="/clients" element={<Clients/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/complaints" element={<Complaints/>} />
        <Route path="/wallet" element={<Wallets/>}/>
        <Route path="/admin" element={<Admin/>} />
        <Route path="/maintenance" element={<Maintenance/>} />
        <Route path="*" element={<h1>Not Found</h1>} />

      </Routes>

    )}

      
    </>
  );
};

export default App;
