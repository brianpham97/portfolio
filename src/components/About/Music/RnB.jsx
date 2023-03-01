import React from 'react';

const RnB = () => {

  const description =
    <div className="max-w-screen-md m-auto flex flex-col items-center mb-5">
      <h1 className="text-4xl text-white underline underline-offset-8 decoration-gray-500">R&B</h1>
      <p className="text-gray-500 text-center mt-5">As I mentioned earlier, I only started getting into R&B pretty late as well. Most R&B I remember was from the radio when I as young but the desire to look for new R&B music to add to a playlist came pretty recently. Similar to my taste for edm music, I love lyrics and for R&B's case, I gravitate to the songs I find a strong feeling for in the lyrics and for the karaoke vibes.</p>
    </div>

  const music_D =
    <div className="hidden max-w-screen-md h-80 mx-auto sm:flex">
      <div className="w-1/2 h-full shadow-md shadow-white border-t-[1px] border-white">
        <img className="w-full h-full object-cover object-left" src="https://www.slantmagazine.com/wp-content/uploads/2008/09/yearofthegentleman-1280x720.jpg"/>
      </div>
      <div className="flex flex-col w-1/2 h-full rounded-b-2xl border-t-[1px] border-t-white">
        <div className="w-full h-1/2 flex flex-col items-center shadow-md shadow-white text-white">
          <p className="mt-2">Current Favorite Artists:</p>
          <p>- Kurt Hugo Schneider</p>
          <p>- Ne-Yo</p>
          <p>- Conor Maynard</p>
        </div>
        <div className="w-full h-1/2 flex flex-col items-center shadow-md shadow-white text-white">
          <p className="mt-2">Current Favorite Songs:</p>
          <a href="https://www.youtube.com/watch?v=EO0MxdDQ73k" target="_blank">
            <p className="hover:text-blue-500">- Wait For You - Elliott Yamin</p>
          </a>
          <a href="https://www.youtube.com/watch?v=_Gjuug_JCO8" target="_blank">
            <p className="hover:text-blue-500">- Mad - Ne-Yo</p>
          </a>
          <a href="https://www.youtube.com/watch?v=a2RA0vsZXf8" target="_blank">
            <p className="hover:text-blue-500">- Just A Dream - Kurt Hugo Schneider</p>
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
            <p className="ml-2">- Kurt Schneider</p>
            <p className="ml-2">- Ne-Yo</p>
            <p className="ml-2">- Conor Maynard</p>
          </div>
          <div className="w-1/2 flex flex-col shadow-md shadow-white text-white py-2">
            <p className="mt-2 ml-2">Current Favorite Songs:</p>
            <a href="https://www.youtube.com/watch?v=EO0MxdDQ73k" target="_blank">
              <p className="ml-2 hover:text-blue-500">Wait For You - Elliott Yamin</p>
            </a>
            <a href="https://www.youtube.com/watch?v=_Gjuug_JCO8" target="_blank">
              <p className="ml-2 hover:text-blue-500">- Mad - Ne-Yo</p>
            </a>
            <a href="https://www.youtube.com/watch?v=a2RA0vsZXf8" target="_blank">
              <p className="ml-2 hover:text-blue-500">- Just a Dream - Kurt Schneider</p>
            </a>
          </div>
        </div>
      </div>

  return (
    <div className="w-full my-[10vh]">
      {description}
      {music_D}
      {music_P}
    </div>
  );
}

export default RnB;