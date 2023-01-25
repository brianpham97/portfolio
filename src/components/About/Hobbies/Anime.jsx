import React from 'react';

const Anime = () => {

  const image =
    <div style={{backgroundImage: 'url(https://bingeddata.s3.amazonaws.com/uploads/2021/09/Fullmetal-Alchemist-Brotherhood-1.jpg)'}}className="h-[22rem] sm:w-1/2 flex flex-col justify-end items-center bg-cover bg-center">
    </div>

  const description =
    <div className="h-[11rem] w-full shadow-md shadow-blue-700">
      <p className="text-gray-500 ml-2 p-2">When it comes to shows, anime is the main genre I watch. I first got into anime in 2016 and I now have an anime list of over 400 entries. When it comes to the culture, I am super passionate about anime and love talking about it. Below is my top 3 and a link to my list ~</p>
    </div>

  const top =
    <div className="h-[11rem] w-1/2 flex flex-col justify-center shadow-md shadow-blue-700 text-white">
      <a href="https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood?q=fullmetal&cat=anime" target="_blank">
        <p className="text-center hover:text-blue-500">#1 Fullmetal Alchemist: Brotherhood</p>
      </a>
      <a href="https://myanimelist.net/anime/5081/Bakemonogatari?q=bakemono&cat=anime" target="_blank">
        <p className="text-center hover:text-blue-500">#2 Mongatari series</p>
      </a>
      <a href="https://myanimelist.net/anime/38680/Fruits_Basket_1st_Season?q=fruits%20basket&cat=anime" target="_blank">
        <p className="text-center hover:text-blue-500">#3 Fruits Basket</p>
      </a>
    </div>

  const profile =
    <div className="h-[11rem] w-1/2 flex justify-center items-center shadow-md shadow-blue-700">
      <a href="https://myanimelist.net/animelist/hiimBoshi" target="_blank">
        <h2 className="w-24 text-center border-[1px] bg-blue-600 text-white text-2xl font-bold p-3 tracking-wider">MAL</h2>
      </a>
    </div>

  return (
    <div className="w-full flex flex-col my-20 sm:flex-row">
      {image}
      <div className="h-[22rem] sm:w-[50%] rounded-b-2xl border-t-[1px] border-blue-700 sm:ml-1">
        {description}
        <div className="flex w-full">
          {top}
          {profile}
        </div>
      </div>
    </div>
  );
}

export default Anime;