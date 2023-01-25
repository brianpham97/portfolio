import React from 'react';
import {FaGithub} from 'react-icons/fa'

const Atelier = () => {
  return (
    <div className="w-full flex flex-col mb-20 gap-4 sm:flex-row">

      <div className="group relative cursor-pointer overflow-hidden rounded-2xl sm:w-[60%]">
        <div className="h-80 w-full">
          <img className="h-full w-full object-cover" src="https://user-images.githubusercontent.com/107714292/189728065-b3721791-5d65-4b2d-8106-faba53a73476.gif"/>
        </div>

        <div className="absolute inset-0 group-hover:bg-gray-500 group-hover:opacity-90">
          <div className="absolute inset-0 flex flex-col translate-y-[100%] items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="text-3xl font-bold text-white">Tech Stacks:</h1>
            <p className="italic text-blue-400">React Javascript HTML CSS Webpack</p>
            <p className="italic text-blue-400">NodeJS Express AWS</p>
            <a href="https://github.com/brianpham97/Front-End-Capstone-FEC" target="_blank">
              <FaGithub className="text-5xl hover:text-blue-400"/>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-32 rounded-2xl border-t-2 border-purple-800 shadow-md shadow-purple-800 cursor-pointer sm:m-auto sm:w-[40%] hover:scale-[102%]">
        <h2 className="text-2xl text-white text-center mt-2">Atelier</h2>
        <p className="text-gray-400 ml-2 px-2">Designed a ratings and reviews section for an e-commerce website that posted over 10000 products</p>
      </div>

    </div>
  );
}

export default Atelier;

