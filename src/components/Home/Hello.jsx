import React from "react";
import me from "../../images/me.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-scroll";

const Hello = () => {
  const CSULB = (
    <span className="text-purple-500 underline">
      <a href="https://www.csulb.edu/" target="_blank">
        CSULB
      </a>
    </span>
  );

  const HR = (
    <span className="text-purple-500 underline">
      <a href="https://www.hackreactor.com/" target="_blank">
        Hack Reactor
      </a>
    </span>
  );

  const PC = (
    <span className="text-purple-500 underline">
      <a href="https://peopleconnect.us/" target="_blank">
        PeopleConnect
      </a>
    </span>
  );

  return (
    <div className="w-full sm:h-screen bg-gradient-to-b from-black to-gray-800">
      <div className="max-w-screen-lg h-full mx-auto pt-9">
        <div className="flex flex-col items-center">
          <div id="pic-container">
            <div id="picture">
              <div
                style={{ backgroundImage: `url(${me})` }}
                className={`w-80 h-80 bg-center bg-cover md:w-96 md:h-96`}
              ></div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center text-center pt-8 px-6 mx-2 sm: m-0">
            <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-800">
              Brian Pham
            </h1>

            <h2 className="text-2xl text-white">
              Hello! I'm a Full Stack Developer and welcome to my personal
              website ~
            </h2>

            <p className="text-gray-500">
              I would describe myself as someone who loves to create or work on
              technical projects that I can look back on and proudly say "I made
              that" or "my team built that". I graduated from {CSULB} in 2019
              with a Bachelors in Information Systems. In 2022, I took a pivot
              to Software Engineering and graduated from {HR}. Currently I am
              working as a Front-End Software Engineer at {PC} and am constantly
              learning new technology as a active member of the tech industry.
              Feel free to stick around to see my work and get to know me a bit.
              I would love to get to know you too!
            </p>
          </div>
          <Link to="navhome" smooth duration={500}>
            <button
              id="btn"
              className="hidden btn-white w-fit items-center mt-10 transition duration-500 sm:flex"
            >
              See more{" "}
              <span className="ml-1">
                <AiOutlineArrowRight />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hello;
