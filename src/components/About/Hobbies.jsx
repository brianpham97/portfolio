import React from 'react';
import League from './Hobbies/League';
import Valorant from './Hobbies/Valorant';
import Anime from './Hobbies/Anime';

const Hobbies = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <League />
      <Valorant />
      <Anime />
    </div>
  );
}

export default Hobbies;