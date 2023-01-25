import React from 'react';
import Stacks from './Stacks'
import { Link } from 'react-router-dom';

const NavHome = (props) => {

  return (
    <div className="w-full h-[50vh] bg-gradient-to-b from-gray-800 to-black p-4 sm:h-[20vh]">
      <div className="max-w-screen-lg mx-auto flex justify-center">
        <ul name="navhome" className="flex flex-col gap-x-20 gap-y-10 pt-10 mt-16 sm:flex-row sm:m-0">
          <li id="btn" className="btn-blue transition duration-500 text-center">
            <Link to='/Projects'>Projects</Link>
          </li>
          <li id="btn" className="btn-litepurple transition duration-500 text-center">
            <Link to='/About'>About Me</Link>
          </li>
          <a href="https://github.com/brianpham97/portfolio/raw/main/Brian_Pham_Resume.pdf" target="_blank">
            <li id="btn" className="btn-purple transition duration-500 text-center cursor-pointer">Resume</li>
          </a>
        </ul>
      </div>
    </div>



  );
}

export default NavHome;