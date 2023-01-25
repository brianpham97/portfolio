import React from 'react';
import Descrption from './Descrption';
import Applications from './Applications';
import Footer from '../Footer';

const Projects = () => {
  window.scrollTo({top: 0, behavior: 'smooth'})
  return (
    <>
      <div className="w-full bg-gradient-to-b from-gray-800 to-gray-900">
        <Descrption />
        <div className="w-full h-32"></div>
        <Applications />
      </div>
      <Footer />
    </>
  );
}

export default Projects;
