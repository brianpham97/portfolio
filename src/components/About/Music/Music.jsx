import React from "react";
import Hero from "./Hero";
import Play from "./Play";
import { music_data } from "./music-data";

const Music = () => {
  const musicData = music_data.map((music, i) => {
    return (
      <div
        key={music.name}
        name={music.name === "EDM" ? "edm" : ""}
        className={`w-full ${i !== 0 ? "pb-[10vh]" : "py-[10vh]"}`}
      >
        <div className="max-w-screen-md m-auto flex flex-col items-center mb-5">
          <h1 className="text-4xl text-white underline underline-offset-8 decoration-gray-500">
            {music.name}
          </h1>
          <p className="text-gray-500 text-center mt-5">{music.description}</p>
        </div>
        {/**
         * -----------------
         * Desktop View
         * -----------------
         */}
        <div className="hidden max-w-screen-md h-80 mx-auto sm:flex">
          <div className="w-1/2 h-full shadow-md shadow-white border-t-[1px] border-t-white">
            <img className="w-full h-full object-cover" src={music.image} />
          </div>
          <div className="flex flex-col w-1/2 h-full rounded-b-2xl border-t-[1px] border-t-white">
            <div className="w-full h-1/2 flex flex-col items-center shadow-md shadow-white text-white">
              <p className="mt-2">Current Favorite Artists:</p>
              {music.artist.map((artist) => (
                <p key={artist}>- {artist}</p>
              ))}
            </div>
            <div className="w-full h-1/2 flex flex-col items-center shadow-md shadow-white text-white">
              <p className="mt-2">Current Favorite Songs:</p>
              <a href={music.link[0]} target="_blank" rel="noreferrer">
                <p className="prevent-overflow hover:text-blue-500">
                  {music.song[0]}
                </p>
              </a>
              <a href={music.link[1]} target="_blank" rel="noreferrer">
                <p className="prevent-overflow hover:text-blue-500">
                  {music.song[1]}
                </p>
              </a>
              <a href={music.link[2]} target="_blank" rel="noreferrer">
                <p className="prevent-overflow hover:text-blue-500">
                  {music.song[2]}
                </p>
              </a>
            </div>
          </div>
        </div>
        {/**
         * -----------------
         * Mobile View
         * -----------------
         */}
        <div className="w-full flex flex-col sm:hidden">
          <div className="w-1/2 h-48 self-center my-2">
            <img
              className="w-full h-full object-cover border-white border-[1px]"
              src={music.image}
            />
          </div>
          <div className="flex border-t-[1px] border-t-white">
            <div className="w-1/2 flex flex-col shadow-md shadow-white text-white py-2">
              <p className="mt-2 ml-2">Current Favorite Artists:</p>
              {music.artist.map((artist) => (
                <p key={artist} className="ml-2">
                  - {artist}
                </p>
              ))}
            </div>
            <div className="w-1/2 flex flex-col shadow-md shadow-white text-white py-2">
              <p className="mt-2 ml-2">Current Favorite Songs:</p>
              <a href={music.link[0]} target="_blank" rel="noreferrer">
                <p className="ml-2 prevent-overflow hover:text-blue-500">
                  {music.song[0]}
                </p>
              </a>
              <a href={music.link[1]} target="_blank" rel="noreferrer">
                <p className="ml-2 prevent-overflow hover:text-blue-500">
                  {music.song[1]}
                </p>
              </a>
              <a href={music.link[2]} target="_blank" rel="noreferrer">
                <p className="ml-2 prevent-overflow hover:text-blue-500">
                  {music.song[2]}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="max-w-screen-lg mx-auto">
      <Play />
      <Hero />
      {musicData}
    </div>
  );
};

export default Music;
