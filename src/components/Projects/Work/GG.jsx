import React from 'react';
import {FaGithub} from 'react-icons/fa'

const GG = () => {
  return (
    <div className="w-full flex flex-col mb-20 gap-4 sm:flex-row">

      <div className="group relative cursor-pointer overflow-hidden rounded-2xl sm:w-[60%]">
        <div className="h-80 w-full">
          <img className="h-full w-full object-cover" src="https://user-images.githubusercontent.com/107714292/193191473-d3357da3-866f-48dd-b4bc-30e6580ce374.gif"/>
        </div>

        <div className="absolute inset-0 group-hover:bg-gray-500 group-hover:opacity-90">
          <div className="absolute inset-0 flex flex-col translate-y-[100%] items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="text-3xl font-bold text-white">Tech Stacks:</h1>
            <p className="italic text-blue-400">React Typescript HTML CSS DataDragon API</p>
            <p className="italic text-blue-400">NodeJS Express MongoDB</p>
            <a href="https://github.com/brianpham97/New.GG-Front" target="_blank">
              <FaGithub className="text-5xl hover:text-blue-400"/>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-32 rounded-2xl border-t-2 border-purple-800 shadow-md shadow-purple-800 cursor-pointer sm:m-auto sm:w-[40%] hover:scale-[102%]">
        <h2 className="text-2xl text-white text-center mt-2">New.GG</h2>
        <p className="text-gray-400 ml-2 px-2">Application using Riot's DataDragon API to randomly simulate a League of Legends champion based on a user's preferences</p>
      </div>

    </div>
  );
}

export default GG;

