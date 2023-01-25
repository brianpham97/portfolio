import React from 'react';

const Korea = () => {
  const image =
    <div style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, .3),rgba(0, 0, 0, .3)), url(https://www.covermore.com.au/sites/default/files/overview-of-seoul-south-korea.jpg)'}}className="h-80 sm:w-1/2 flex flex-col justify-end items-center bg-cover bg-center bg-no-repeat border-t-[1px] border-white shadow-md shadow-white sm:h-auto">
      <h2 className="font-games text-white text-2xl mb-2">South Korea</h2>
    </div>

    const description =
      <div className="w-full shadow-md shadow-white text-white">
        <p className="text-gray-500 ml-2 p-2">I'm a big fan of Korean culture, especially on their clean fashion and their emphasis on beauty. I became really big on fashion when I noticed I have a "look good feel good personaltiy". Because of that, I always wanted to find out what I think I look best in. When I came across Korea fashion through vloggers on youtube, I started trying their hairstyle tutorials and adapt their fits to my liking. I also love the skincare culture Korea has of always trying to look young so I try to discipline myself to do my routine everyday as well.</p>
        <br />
        <p className="text-gray-500 ml-2 p-2"> A joke I always make is to go to Korea with an empty suitcase and return with it full of clothes and products from there. This is one of my dream solo trips I want to do for myself to experience the culture for myself firsthand.</p>
      </div>


  return (
    <div className="w-full flex flex-col mb-10 sm:flex-row">
      {image}
      <div className="sm:w-[50%] rounded-b-2xl border-t-[1px] border-white ml-1">
        {description}
      </div>
    </div>
  );
}

export default Korea;