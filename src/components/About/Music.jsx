import React from 'react';
import Hero from './Music/Hero';
import Play from './Music/Play';
import Edm from './Music/Edm';
import RnB from './Music/RnB';

const Music = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <Play />
      <Hero />
      <Edm />
      <RnB />
    </div>
  );
}

export default Music;