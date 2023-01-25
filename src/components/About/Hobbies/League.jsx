import React from 'react';

const League = () => {

  const image =
    <div style={{backgroundImage: 'url(https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Vayne_10.jpg)'}}className="h-80 sm:h-[23rem] sm:w-1/2 flex flex-col justify-end items-center bg-cover bg-center bg-no-repeat">
      <h2 className="font-games text-white text-2xl mb-2">Vayne</h2>
    </div>

    const league =
      <span className="text-[#c9aa71] underline">
        <a href="https://www.leagueoflegends.com/en-us/" target="_blank">League of Legends</a>
      </span>

    const description =
      <div className="h-[12rem] w-full shadow-md shadow-[#c9aa71]">
        <p className="text-gray-500 ml-2 p-2">One of my favorite video games of all time is {league} by Riot Games. I started this game in 2015 and is currently the only game I play for competitive fun. The character I enjoy playing the most is Vayne because of her stylish outplay potential. Currently in gold but this year I'm looking to climb to Platinum for the first time!</p>
      </div>



    const rank =
      <div className="h-[8rem] sm:h-[11rem] w-1/2 flex justify-center items-center shadow-md shadow-[#c9aa71]">
        <img className="h-[3/4] w-[3/4]" src="https://lolg-cdn.porofessor.gg/img/s/league-icons-v3/160/4.png?v=8"/>
      </div>

    const summ =
      <div className="h-[8rem] sm:h-[11rem] w-1/2 flex justify-center items-center shadow-md shadow-[#c9aa71]">
        <h2 id="summ" className="font-games text-[#cdbe91] bg-[#0f1923] text-2xl p-3">baepham</h2>
      </div>
  return (
    <div className="w-full flex flex-col mb-10 sm:flex-row">
      {image}
      <div className="h-80 sm:w-[50%] rounded-b-2xl border-t-[1px] border-[#c9aa71] sm:ml-1">
        {description}
        <div className="flex w-full">
          {rank}
          {summ}
        </div>
      </div>
    </div>
  );
}

export default League;