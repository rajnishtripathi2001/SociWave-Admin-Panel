import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Login from "./Pages/LoginPage/Login";



function App() {

  const[loginStatus,setLoginStatus] = useState(true);
  const[screenWidth,setScreenWidth] = useState();
  
  useEffect(() => {
    setLoginStatus(sessionStorage.getItem('loginStatus'))
  },[]);

  useEffect(() => {
    const isSmallScreen = window.innerWidth<768;

    setScreenWidth(isSmallScreen);
    
  }, []);




  return (
    <>
    {screenWidth ? (
      <div className="bg-red-500 w-[80%] text-white text-center p-6 rounded-md shadow-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FAB005/error--v1.png" alt="error--v1"/>
        <p>Sorry, this website is not accessible on small-width devices. Please use a PC, laptop, or tablet for the best experience.</p>
      </div>

    ):(
      <Routes>
        <Route path="/" exact element={loginStatus ? <HomePage/> : <Login/>} />
        <Route path="/" exact element={loginStatus ? <HomePage/> : <Login/>} />
        <Route path="*" element={<h1>Not Found</h1>} />

      </Routes>

    )}

      
    </>
  );
};

export default App;
