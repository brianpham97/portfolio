import React from 'react';

const Descrption = () => {
  return (
    <div className=" max-w-screen-lg h-full mx-auto pt-9">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-2 items-center text-center pt-2 px-6 mx-2 sm: m-0">
          <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-800 py-2">Projects.</h1>
          <p className="text-gray-500 py-2">These are applications I have built with the technologies I am fundamentally strong in. My front end stacks consist of Javascript/Typescript, React, HTML, CSS and I am slowly learning Tailwind to integrate into my current and future applications. My back end stacks consist of NodeJS/Express, PostgreSQL, MySQL, MongoDB, Typescript. I hope you enjoy what you see below ~</p>
        </div>
      </div>
    </div>
  );
}

export default Descrption;