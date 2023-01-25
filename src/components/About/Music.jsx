import React from 'react';
import Hero from './Music/Hero';
import Edm from './Music/Edm';
import RnB from './Music/RnB';

const Music = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <Hero />
      <Edm />
      <RnB />
    </div>
  );
}

export default Music;