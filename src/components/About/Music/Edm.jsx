import React from 'react';

const Edm = () => {

  const description =
    <div className="max-w-screen-md m-auto flex flex-col items-center mb-5">
      <h1 className="text-4xl text-white underline underline-offset-8 decoration-gray-500">EDM</h1>
      <p className="text-gray-500 text-center mt-5">I kinda lived under a rock when it came to music until college so I didn't develop any taste for music for a while. I went to my first music festival in 2016 and to be honest, it was really boring at the time. I started going more just for friends but over time I started to develop my preference for music. The one song that got me into edm was Hero by Cash Cash and I began to have an appreciation for lyrics. When I see line ups now, I always see if there are artists that play music that has fun karaoke vibes. Even at the music festivals, my favorite thing to do just to scream the lyrics with people because that's the way I have the most fun expressing myself at these events.</p>
    </div>

  const music_D =
    <div className="hidden max-w-screen-md h-80 mx-auto sm:flex">
      <div className="w-1/2 h-full shadow-md shadow-white border-t-[1px] border-t-white">
        <img className="w-full h-full object-cover" src="https://m.media-amazon.com/images/I/51VZek4tgBL._SY1000_.jpg"/>
      </div>
      <div className="flex flex-col w-1/2 h-full rounded-b-2xl border-t-[1px] border-t-white">
        <div className="w-full h-1/2 flex flex-col items-center shadow-md shadow-white text-white">
          <p className="mt-2">Current Favorite Artists:</p>
          <p>- Cash Cash</p>
          <p>- Gryffin</p>
          <p>- Zedd</p>
        </div>
        <div className="w-full h-1/2 flex flex-col items-center shadow-md shadow-white text-white">
          <p className="mt-2">Current Favorite Songs:</p>
          <a href="https://www.youtube.com/watch?v=SFCdcbsvhF8" target="_blank">
            <p className="hover:text-blue-500">{'- Hero (Deep Mix) - Cash Cash'}</p>
          </a>
          <a href="https://www.youtube.com/watch?v=TiJRixRIWcI" target="_blank">
            <p className="hover:text-blue-500">- Roll the Dice - Armin van Buuren</p>
          </a>
          <a href="https://www.youtube.com/watch?v=6nCRbdzIFI4" target="_blank">
            <p className="hover:text-blue-500">- Need Your Love - Gryffin</p>
          </a>
        </div>
      </div>
    </div>

    const music_P =

    <div className="w-full flex flex-col sm:hidden">
      <div className="w-1/2 h-48 self-center my-2">
        <img className="w-full h-full object-cover border-white border-[1px]" src="https://m.media-amazon.com/images/I/51VZek4tgBL._SY1000_.jpg"/>
      </div>
      <div className="flex border-t-[1px] border-t-white">
        <div className="w-1/2 flex flex-col shadow-md shadow-white text-white py-2">
          <p className="mt-2 ml-2">Current Favorite Artists:</p>
          <p className="ml-2">- Cash Cash</p>
          <p className="ml-2">- Gryffin</p>
          <p className="ml-2">- Zedd</p>
        </div>
        <div className="w-1/2 flex flex-col shadow-md shadow-white text-white py-2">
          <p className="mt-2 ml-2">Current Favorite Songs:</p>
          <a href="https://www.youtube.com/watch?v=SFCdcbsvhF8" target="_blank">
            <p className="ml-2 hover:text-blue-500">{'- Hero - Cash Cash'}</p>
          </a>
          <a href="https://www.youtube.com/watch?v=TiJRixRIWcI" target="_blank">
            <p className="ml-2 hover:text-blue-500">- Roll the Dice - Armin</p>
          </a>
          <a href="https://www.youtube.com/watch?v=6nCRbdzIFI4" target="_blank">
            <p className="ml-2 hover:text-blue-500">- Need Your Love - Gryffin</p>
          </a>
        </div>
      </div>
    </div>

  return (
    <div name="edm" className="w-full pt-10 mt-[8vh] sm:mt-[20vh]">
      {description}
      {music_D}
      {music_P}
    </div>
  );
}

export default Edm;