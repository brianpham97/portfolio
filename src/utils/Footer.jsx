import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="w-full h-40 bg-black text-white">
      <div className="flex justify-between pt-5">
        <div className="flex flex-col gap-2 pl-4 mt-3">
          <h2 className="text-gray-500">Contacts:</h2>
          <p className="cursor-pointer hover:underline hover:text-[#c9aa71]">
            phambri97@gmail.com
          </p>
          <p className="cursor-pointer hover:underline hover:text-[#c9aa71]">
            {"(562) 338-5219"}
          </p>
        </div>
        <div className="flex flex-col pr-4 mt-3 gap-2">
          <h2 className="text-gray-500">Portfolios:</h2>
          <a
            href="https://github.com/brianpham97"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineGithub className="text-xl hover:text-[#c9aa71]" />
          </a>
          <a
            href="https://www.linkedin.com/in/lbrian-phaml/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineLinkedin className="text-xl hover:text-[#c9aa71]" />
          </a>
        </div>
      </div>
      <Link to="header" smooth duration={500}>
        <h1 className="text-center text-base italic cursor-pointer hover:text-[#c9aa71] hover:underline">
          Designed by Brian Pham
        </h1>
      </Link>
    </footer>
  );
};

export default Footer;
