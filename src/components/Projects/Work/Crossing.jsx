import React from 'react';
import {FaGithub} from 'react-icons/fa'

const Crossing = () => {
  return (
    <div className="w-full flex flex-col mb-20 gap-4 sm:flex-row">

      <div className="group relative cursor-pointer overflow-hidden rounded-2xl sm:w-[60%]">
        <div className="h-80 w-full">
          <img className="h-full w-full object-cover" src="https://user-images.githubusercontent.com/107714292/194730569-eba4f8d3-5338-41d4-b68a-94c21d83bbfd.gif"/>
        </div>

        <div className="absolute inset-0 group-hover:bg-gray-400 group-hover:opacity-90">
          <div className="absolute inset-0 flex flex-col translate-y-[100%] items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="text-3xl font-bold text-white">Tech Stacks:</h1>
            <p className="italic text-purple-800">React Javascript Chakra-UI Webpack</p>
            <p className="italic text-purple-800">NodeJS Express PostgreSQL</p>
            <p className="italic text-purple-800">Google Cloud AWS Firebase</p>
            <a href="https://github.com/brianpham97/front-end" target="_blank">
              <FaGithub className="text-5xl hover:text-purple-800"/>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-32 rounded-2xl border-t-2 border-blue-400 shadow-md shadow-blue-400 cursor-pointer sm:m-auto sm:w-[40%] hover:scale-[102%]">
        <h2 className="text-2xl text-white text-center mt-2">Community Crossing</h2>
        <p className="text-gray-500 ml-2 px-2">Social media app for users to register and create groups to host events with other users</p>
      </div>

    </div>
  );
}

export default Crossing;

