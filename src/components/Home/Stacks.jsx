import React from "react";
import { technology, future_stack } from "./technology";

const Stacks = () => {
  return (
    <div className="w-full h-full bg-gradient-to-b from-black to-gray-900">
      <div className="flex flex-col justify-center text-white p-4">
        <p className="self-center text-4xl underline underline-offset-8 decoration-gray-500">
          Tech Stacks
        </p>

        <div className="grid grid-cols-2 gap-4 text-center py-8 px-12 sm:grid-cols-3 sm:px-0">
          {technology.map((tech, index) => {
            return (
              <div
                key={index}
                className={`shadow-md py-2 rounded-lg ${tech.color} hover:scale-105`}
              >
                <a href={tech.link} target="_blank">
                  <img
                    src={tech.image}
                    className="w-20 h-20 object-center object-contain mx-auto"
                  />
                </a>
                <p className="mt-4">{tech.language}</p>
              </div>
            );
          })}
        </div>

        <p className="text-4xl underline underline-offset-8 decoration-gray-500 self-center">
          Future Interests
        </p>
        <div className="grid grid-cols-2 gap-4 text-center py-8 px-12 sm:grid-cols-3 sm:px-0">
          {future_stack.map((stack, index) => {
            return (
              <div
                key={index}
                className={`shadow-md py-2 rounded-lg ${stack.color} hover:scale-105`}
              >
                <a href={stack.link} target="_blank">
                  <img
                    src={stack.image}
                    className="w-20 h-20 object-center object-contain mx-auto"
                  />
                </a>
                <p className="mt-4">{stack.language}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stacks;
