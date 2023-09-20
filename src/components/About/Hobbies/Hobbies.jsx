import React from "react";
import { hobby_data } from "./hobby-data";

const Hobbies = () => {
  const hobbyData = hobby_data.map((hobby, i) => {
    if (i % 2 === 0) {
      return (
        <div
          key={hobby.name}
          className={`w-full flex flex-col
            my-20 ${i === 0 && "mb-10"}
            ${i === hobby_data.length - 1 && "pb-20 my-0"} sm:flex-row`}
        >
          {hobby.image}
          <div
            className={`h-80 sm:w-[50%] rounded-b-2xl border-t-[1px] ${
              hobby.name === "League of Legends" && "border-[#00aeef]"
            } ${hobby.name === "MAL" && "border-blue-700"}  sm:ml-1`}
          >
            {hobby.description(hobby.site)}
            <div className="flex w-full">
              {hobby.ranking}
              {hobby.profile}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          key={hobby.name}
          className={`w-full flex flex-col my-20 ${
            i === hobby_data.length - 1 && "pb-20 my-0"
          } sm:flex-row`}
        >
          <div
            className={`h-80 sm:w-[50%] rounded-b-2xl border-t-[1px] ${
              hobby.name === "Valorant" && "border-red-800"
            } ${hobby.name === "Genshin Impact" && "border-[#ebe7df]"}`}
          >
            {hobby.description(hobby.site)}
            <div className="flex w-full">
              {hobby.ranking}
              {hobby.profile}
            </div>
          </div>
          {hobby.image}
        </div>
      );
    }
  });

  return <div className="max-w-screen-lg mx-auto">{hobbyData}</div>;
};

export default Hobbies;
