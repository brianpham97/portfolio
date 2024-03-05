import React from "react";
import hutao from "../images/hutao.png";

const Loader = () => {
  return (
    <div className="fixed h-screen w-screen bg-gray-900 loader-overlay ">
      <div className="absolute text-white loader-content">
        <img src={hutao} alt="" />
        <p className="text-2xl">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
