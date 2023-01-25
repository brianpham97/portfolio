import React from 'react';

const Japan = () => {
  const image =
    <div style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, .3),rgba(0, 0, 0, .3)), url(https://onhisowntrip.com/wp-content/uploads/2020/04/Philosopher-GaijinPot-Travel.jpg)'}}className="h-80 sm:w-1/2 flex flex-col justify-end items-center bg-cover bg-center bg-no-repeat border-t-[1px] border-pink-500 shadow-md shadow-pink-500 sm:h-auto">
      <h2 className="font-games text-white text-2xl mb-2">Japan</h2>
    </div>

    const description =
      <div className="w-full shadow-md shadow-pink-500 text-white">
        <p className="text-gray-500 ml-2 p-2">Unlike Korea, I want to explore Japan more for the views. Things that Japan is known for like their Sakura Blossons, their shrines, parks, temples, and the city life of Tokyo.</p>
        <br />
        <p className="text-gray-500 ml-2 p-2">In terms of their culture, I'm mainly interested in seeing the communities focused on anime because it's where it originates. Looking forward to seeing what events they host catered to this attractive as well as any appearal you would not be able to find in the United States.
        </p>
      </div>


  return (
    <div className="w-full flex flex-col mb-10 sm:flex-row">
      {image}
      <div className="sm:w-[50%] rounded-b-2xl border-t-[1px] border-pink-500 ml-1">
        {description}
      </div>
    </div>
  );
}

export default Japan;