import React from "react";

export default function Sidebar() {
  const logout = () => {
    sessionStorage.clear();
    window.location.reload();
  };

  return (
    <div className="h-screen fixed w-[25vw] py-5 bg-[#15202B] text-white flex flex-col items-center ">
      <div className="w-[95%] h-14 mb-5 flex items-center">
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios-filled/50/7950F2/yelp.png"
          alt="yelp"
        />
        <b className="ml-3 ">SociWave Admin Panel</b>
      </div>

      <div className="w-[95%] mb-5 h-[85vh]">
        <a
          href="/dashboard"
          className="w-[100%] h-12 bg-slate-800 mt-4 px-4 flex items-center rounded-md"
        >
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/fluency/48/control-panel.png"
            alt="home--v1"
          />
          <b className="ml-5">Dashboard</b>
        </a>

        <a
          href="/mail"
          className="w-[100%] h-12 bg-slate-800 mt-4 px-4 flex items-center rounded-md"
        >
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/3d-fluency/94/paper-plane.png"
            alt="home--v1"
          />
          <b className="ml-5">Mail</b>
        </a>

        <a
          href="/clients"
          className="w-[100%] h-12 bg-slate-800 mt-4 px-4 flex items-center rounded-md"
        >
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/fluency/48/gender-neutral-user.png"
            alt="home--v1"
          />
          <b className="ml-5">Clients</b>
        </a>

        <a
          href="/orders"
          className="w-[100%] h-12 bg-slate-800 mt-4 px-4 flex items-center rounded-md"
        >
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/fluency/48/purchase-order.png"
            alt="home--v1"
          />
          <b className="ml-5">Orders</b>
        </a>

        <a
          href="/complaints"
          className="w-[100%] h-12 bg-slate-800 mt-4 px-4 flex items-center rounded-md"
        >
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/fluency/48/complaint.png"
            alt="home--v1"
          />
          <b className="ml-5">Complaints</b>
        </a>

        <a
          href="/wallet"
          className="w-[100%] h-12 bg-slate-800 mt-4 px-4 flex items-center rounded-md"
        >
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/ios-filled/50/22C3E6/wallet.png"
            alt="home--v1"
          />
          <b className="ml-5">Manage Wallet</b>
        </a>

        <div className="my-2 mx-1 w-[100%] text-gray-400">Admins</div>

        <a
          href="/admin"
          className="w-[100%] h-12 bg-slate-800 px-4 flex items-center rounded-md"
        >
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/glyph-neue/64/22C3E6/admin-settings-male.png"
            alt="home--v1"
          />
          <b className="ml-5">Add Admins</b>
        </a>

        <a
          href="/maintenance"
          className="w-[100%] h-12 bg-slate-800 mt-4 px-4 flex items-center rounded-md"
        >
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/ios-filled/50/22C3E6/online-maintenance-portal.png"
            alt="home--v1"
          />
          <b className="ml-5">Start Maintenance</b>
        </a>
      </div>

      <button className="bg-red-500 w-[95%] p-1 rounded-md" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
