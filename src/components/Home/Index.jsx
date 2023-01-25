import React from 'react';
import Hello from "./Hello"
import NavHome from './NavHome';
import Stacks from './Stacks';
import Footer from '../Footer';

const Home = () => {
  return (
    <>
      <Hello />
      <NavHome />
      <Stacks />
      <Footer />
    </>
  );
}

export default Home;