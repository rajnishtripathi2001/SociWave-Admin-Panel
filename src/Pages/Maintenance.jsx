import React, { useState, useEffect } from "react";
import Sidebar from "../Comonents/Sidebar";
import MainScreen from "../Comonents/MainScreen";
import axios from "axios";

export default function Maintenance() {
  const [mode, setMode] = useState();

  const [status, setStatus] = useState();

  useEffect(() => {
    axios
      .get("https://flask-backend.up.railway.app/getMaintenance")
      .then((res) => {
        if (res.data.Result.maintinanceMode === "Active") {
          setMode(1);
          setStatus("Website is Active and Running Fine.");
        } else if (res.data.Result.maintinanceMode === "Under Maintenance") {
          setMode(0);
          setStatus("Website is Under Maintenance and will be back soon.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const startMaintenance = async () => {
    await axios
      .post("https://flask-backend.up.railway.app/maintenance", { command: "start" })
      .then((res) => {
        setMode(1);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const stopMaintenance = async () => {
    await axios
      .post("https://flask-backend.up.railway.app/maintenance", { command: "stop" })
      .then((res) => {
        setMode(0);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex">
      <Sidebar />
      <MainScreen>
        <div className="text-white flex flex-col items-center m-5">
          <h1 className="text-3xl font-bold"> Maintenance Page</h1>

          <div className="border w-full my-5 p-2 h-[85vh] text-center">
            {mode ? (
              <>
                <div className="flex flex-col items-center my-5 text-center">
                  <img
                    width="94"
                    height="94"
                    src="https://img.icons8.com/3d-fluency/94/hard-working.png"
                    alt="hard-working"
                  />
                </div>
                <span className="text-green-500">{status}</span>
                <div className="flex flex-col items-center my-5">
                  <div className="flex my-2">
                    <button
                      type="button"
                      class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
                      onClick={startMaintenance}
                    >
                      Start Maintenance
                    </button>
                    <button
                      type="button"
                      class="text-white bg-gray-500 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
                      // onClick={stopMaintenance}
                      disabled
                    >
                      Stop Maintenance
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col items-center my-5 text-center">
                  <img
                    width="94"
                    height="94"
                    src="https://img.icons8.com/external-bearicons-blue-bearicons/64/external-Under-Maintenance-website-bearicons-blue-bearicons.png"
                    alt="Under-Maintenance-website"
                  />
                </div>
                <span className="text-red-500">{status}</span>
                <div className="flex flex-col items-center my-5">
                  <div className="flex my-2">
                    <button
                      type="button"
                      class="text-white bg-gray-500 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
                      disabled
                    >
                      Start Maintenance
                    </button>
                    <button
                      type="button"
                      class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
                      onClick={stopMaintenance}
                    >
                      Stop Maintenance
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </MainScreen>
    </div>
  );
}
