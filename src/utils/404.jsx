import React from "react";
import ganyu from "../images/ganyu.jpg";

const NotFound = () => {
  const redirect = (
    <a
      href="https://brianpham97.github.io/portfolio/"
      className="text-blue-300 hover:text-blue-600"
    >
      here
    </a>
  );

  return (
    <div className="w-full h-[75vh] bg-gradient-to-b from-gray-800 to-gray-900 flex flex-col justify-center items-center">
      <div className="h-[30rem] w-[34rem]">
        <img
          src="https://pic-bstarstatic.akamaized.net/ugc/55fc05552820188bf1cdf0fd3fc098cc9bac92cb.jpg@1200w_630h_1e_1c_1f.webp"
          className="h-full w-full object-fill"
        />
      </div>
      <div className="flex flex-col items-center pt-4 text-white">
        <h4 className="text-xl">Sorry your page was not found!</h4>
        <h4 className="text-xl">Please click {redirect} to reload</h4>
      </div>
    </div>
  );
};

export default NotFound;
