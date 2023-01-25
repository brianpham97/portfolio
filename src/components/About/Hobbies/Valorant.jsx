import React from 'react';

const Valorant = () => {

  const image =
    <div style={{backgroundImage: 'url(https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt909ba6b565908b76/6259e1e12777714c51b30c0a/Jett_1920x1080.jpg)'}}className="h-80 sm:h-[23rem] sm:w-1/2 flex flex-col justify-end items-center bg-cover bg-center bg-no-repeat sm:ml-1">
      <h2 className="font-games text-white text-2xl mb-2">Jett</h2>
    </div>

  const valo =
    <span className="text-[#ff4655] underline">
      <a href="https://playvalorant.com/en-us/" target="_blank">Valorant</a>
    </span>

  const description =
    <div className="w-full h-[12rem] max-h-fit shadow-md shadow-red-600">
      <p className="text-gray-500 ml-2 p-2">Another game by Riot I really enjoy is {valo}. I'm not am FPS player but this game is really fun for me socially because of all the communication required and all the possible outcomes of each game. Also love playing Jett because of her agile kit. I can't play Valorant competitively so I just play casually with friends!</p>
    </div>

  const rank =
    <div className="w-1/2 h-[8rem] sm:h-[11rem] flex justify-center items-center shadow-md shadow-red-800">
      <h2 className="text-white 2xl ml-2">I'm really bad at this game LOL</h2>
    </div>

  const tag =
    <div className="w-1/2 h-[8rem] sm:h-[11rem] flex justify-center items-center shadow-md shadow-red-800">
      <h2 className="border-[1px] bg-[#0f1923] border-[#ff4655] font-valo text-2xl  text-[#ff4655] p-3 tracking-widest">baepham</h2>
    </div>


  return (
    <div className="w-full flex flex-col my-20 sm:flex-row">
      <div className="h-80 sm:w-[50%] rounded-b-2xl border-t-[1px] border-red-800">
        {description}
        <div className="flex w-full">
          {rank}
          {tag}
        </div>
      </div>
      {image}
    </div>
  );
}

export default Valorant;

<h2 className="font-valo text-2xl flex justify-center items-center border-[1px] border-[#ff4655] text-[#ff4655] p-2">baepham</h2>