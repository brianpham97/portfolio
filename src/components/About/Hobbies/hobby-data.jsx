import maplestory from "../../../images/maplestory.png";
import taih3n from "../../../images/taih3n.png";
import fmab from "../../../images/fmab.jpeg";
import genshin from "../../../images/genshin.jpg";

export const hobby_data = [
  {
    name: "MapleStory",
    image: (
      <div
        style={{
          backgroundImage: `url(${maplestory})`,
        }}
        className="h-80 sm:h-[23rem] sm:w-1/2 flex flex-col justify-end items-center bg-cover bg-no-repeat sm:ml-1"
      ></div>
    ),

    site: (
      <span className="text-[#00aeef] underline">
        <a
          href="https://www.nexon.com/maplestory/"
          target="_blank"
          rel="noreferrer"
        >
          MapleStory
        </a>
      </span>
    ),

    description: (site) => (
      <div className="h-[12rem] w-full shadow-md shadow-[#00aeef]">
        <p className="text-gray-500 ml-2 p-2 league">
          One of my favorite video games of all time is {site} by Nexon. I
          started this game during my elementary school days and started playing
          again in 2024. My main character is called an Adele and the simplicity
          and nostalgia of this game got me hooked instantly upon returning!
        </p>
      </div>
    ),

    ranking: (
      <div className="h-[8rem] sm:h-[11rem] w-1/2 flex justify-center items-center shadow-md shadow-[#00aeef]">
        <img className="h-[3/4] w-[3/4]" src={taih3n} />
      </div>
    ),

    profile: (
      <div className="h-[8rem] sm:h-[11rem] w-1/2 flex justify-center items-center shadow-md shadow-[#00aeef]">
        <a
          href="https://mapleranks.com/u/taih3n"
          target="_blank"
          rel="noreferrer"
        >
          <h2
            id="ign"
            className="font-games text-[#cdbe91] bg-[#0f1923] text-2xl p-3"
          >
            taih3n
          </h2>
        </a>
      </div>
    ),
  },
  {
    name: "Genshin Impact",
    image: (
      <div
        style={{
          backgroundImage: `url(${genshin})`,
        }}
        className="h-80 sm:h-[23rem] sm:w-1/2 flex flex-col justify-end items-center bg-cover bg-no-repeat sm:ml-1"
      ></div>
    ),

    site: (
      <span className="text-[#fffdfa] underline">
        <a
          href="https://genshin.hoyoverse.com/en/"
          target="_blank"
          rel="noreferrer"
        >
          Genshin Impact
        </a>
      </span>
    ),

    description: (site) => (
      <div className="w-full h-[12rem] max-h-fit shadow-md shadow-[#ebe7df]">
        <p className="text-gray-500 ml-2 p-2">
          I also play {site} by Hoyoverse as one of my casual games. My favorite
          part of this game is the design and detail in the characters they
          created. As mentioned earlier I love anime and Genshin Impact brings
          those fantasies into a playable open world game to adventure through.
        </p>
      </div>
    ),

    ranking: (
      <div className=" relative w-1/2 h-[8rem] sm:h-[11rem] flex justify-center items-center shadow-md shadow-[#ebe7df]">
        <div className="relative flex justify-center items-center bg-[#fffdfa] border-[3px] border-[#c2ab77] genshin-shadow">
          <div className="flex justify-center items-center diamond-icon after:ml-8"></div>
          <div className="p-3 text-[#3b4354] text-l font-bold ml-5">
            Adventure Rank 60
          </div>
        </div>
      </div>
    ),

    profile: (
      <div className=" relative w-1/2 h-[8rem] sm:h-[11rem] flex justify-center items-center shadow-md shadow-[#ebe7df]">
        <div className="relative flex justify-center items-center bg-[#fffdfa] border-[3px] border-[#c2ab77] genshin-shadow">
          <div className="p-3 text-[#3b4354] text-2xl font-bold mr-5 tracking-wider">
            baepham
          </div>
          <div className="flex justify-center items-center diamond-icon after:mr-8"></div>
        </div>
      </div>
    ),
  },
  {
    name: "MAL",
    image: (
      <div
        style={{
          backgroundImage: `url(${fmab})`,
        }}
        className="h-[22rem] sm:w-1/2 flex flex-col justify-end items-center bg-cover bg-center"
      ></div>
    ),

    description: (site) => (
      <div className="h-[11rem] w-full shadow-md shadow-blue-700">
        <p className="text-gray-500 ml-2 p-2">
          When it comes to shows, anime is the main genre I watch. I first got
          into anime in 2016 and I now have an anime list of over 400 entries.
          When it comes to the culture, I am super passionate about anime and
          love talking about it. Below is my top 3 and a link to my list ~
        </p>
      </div>
    ),

    ranking: (
      <div className="h-[11rem] w-1/2 flex flex-col justify-center shadow-md shadow-blue-700 text-white">
        <a
          href="https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood?q=fullmetal&cat=anime"
          target="_blank"
          rel="noreferrer"
        >
          <p className="text-center hover:text-blue-500">
            #1 Fullmetal Alchemist: Brotherhood
          </p>
        </a>
        <a
          href="https://myanimelist.net/anime/5081/Bakemonogatari?q=bakemono&cat=anime"
          target="_blank"
          rel="noreferrer"
        >
          <p className="text-center hover:text-blue-500">
            #2 Monogatari series
          </p>
        </a>
        <a
          href="https://myanimelist.net/anime/38680/Fruits_Basket_1st_Season?q=fruits%20basket&cat=anime"
          target="_blank"
          rel="noreferrer"
        >
          <p className="text-center hover:text-blue-500">#3 Fruits Basket</p>
        </a>
      </div>
    ),

    profile: (
      <div className="h-[11rem] w-1/2 flex justify-center items-center shadow-md shadow-blue-700">
        <a
          href="https://myanimelist.net/animelist/hiimBoshi"
          target="_blank"
          rel="noreferrer"
        >
          <h2 className="w-24 text-center border-[1px] bg-blue-600 text-white text-2xl font-bold p-3 tracking-wider">
            MAL
          </h2>
        </a>
      </div>
    ),
  },
];
