import React from 'react';
import {FaGithub} from 'react-icons/fa'

const Fresh = () => {
  return (
    <div className="w-full flex flex-col mb-20 gap-4 sm:flex-row">

      <div className="group relative cursor-pointer overflow-hidden rounded-2xl sm:w-[60%]">
        <div className="h-80 w-full">
          <img className="h-full w-full object-fill" src="https://user-images.githubusercontent.com/107714292/192110384-c38cf9c4-cb2f-452d-a095-acc2eda02c6f.png"/>
        </div>

        <div className="absolute inset-0 group-hover:bg-gray-400 group-hover:opacity-90">
          <div className="absolute inset-0 flex flex-col translate-y-[100%] items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="text-3xl font-bold text-white">Tech Stacks:</h1>
            <p className="italic text-purple-800">Typescript NodeJS Express</p>
            <p className="italic text-purple-800">PostgreSQL AWS Nginx</p>
            <a href="https://github.com/brianpham97/Fresh-Threadz-RnR" target="_blank">
              <FaGithub className="text-5xl hover:text-purple-800"/>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-32 rounded-2xl border-t-2 border-blue-400 shadow-md shadow-blue-400 cursor-pointer sm:m-auto sm:w-[40%] hover:scale-[102%]">
        <h2 className="text-2xl text-white text-center mt-2">Fresh Threads</h2>
        <p className="text-gray-400 ml-2 px-2">Created a Rest API for a ratings and reviews section for an e-commerce website and scaled it for over 1000 users per second</p>
      </div>

    </div>
  );
}

export default Fresh;

