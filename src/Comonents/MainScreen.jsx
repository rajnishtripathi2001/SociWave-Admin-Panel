import React from "react";

export default function MainScreen(props) {
  return (
    <div className="w-4/5 ml-[25%] ">
      {props.children}
    </div>
  );
}
