import React from 'react';
import Crossing from './Work/Crossing';
import GG from './Work/GG';
import Fresh from './Work/Fresh';
import Atelier from './Work/Atelier';

// console.log(window.innerWidth, 'width')

const Applications = (props) => {
  return (
    <div className="max-w-screen-lg mx-auto p-2">
        <Crossing />
        <GG />
        <Fresh />
        <Atelier />
    </div>
  );
}

export default Applications;