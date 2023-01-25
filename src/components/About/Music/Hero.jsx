import React from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai'
import {Link} from 'react-scroll'

const Hero = () => {
  return (
    <div style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, .5),rgba(0, 0, 0, .5)), url(https://www.billboard.com/wp-content/uploads/2022/05/EDC-Las-Vegas-2022-cr-Keiki-Lani-Knudsen-1548.jpg)'}}className="w-full h-[50vh] flex flex-col justify-center items-center bg-cover bg-bottom sm:bg-center">
      <h1 className="font-logo text-white text-6xl text-center sm:text-7xl">Music Brings People Together</h1>
      <Link to="edm" smooth duration={500}>
        <button className="hidden w-fit p-3 items-center bg-black text-white mt-24 sm:flex">See more <span className="ml-1"><AiOutlineArrowRight /></span></button>
      </Link>
    </div>
  );
}

export default Hero;

