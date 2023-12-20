import React from "react";

export default function Page404() {
  return (
    <div className="min-w-[300px] max-w-[400px] bg-[#15202B] text-white border-2 border-red-500 shadow-[0_0_25px_rgba(0,0,0,0.3)] p-[10px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col">
      <h4 className="text-3xl my-2 text-red-600">Oops! 404 Error</h4>
      <h3 className="text-xl my-2">
        Page Not Found 
      </h3>
    </div>
  );
}
