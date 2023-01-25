import React from 'react';
import { Routes, Route } from "react-router-dom"
import Header from './components/Header';
import Home from './components/Home/Index';
import Projects from './components/Projects/Index';
import About from './components/About/Index';

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Routes>
    </>
  )
}

export default App