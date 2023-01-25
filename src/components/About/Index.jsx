import React, {useState} from 'react';
import Descrption from './Description';
import Hobbies from './Hobbies';
import Music from './Music'
import Todo from './Todo';

import Footer from '../Footer';

const About = () => {
  window.scrollTo({top: 0, behavior: 'smooth'})
  const [page, setPage] = useState('hobbies')

  const changePage = (select) => {
    setPage(select)
  }

  return (
    <>
      <div className="w-full bg-gradient-to-b from-gray-800 to-gray-900">
        <Descrption page={page} changePage={changePage}/>
        <div className="w-full h-20"></div>
        {page === 'hobbies' ? <Hobbies /> : null}
        {page === 'music' ? <Music /> : null}
        {page === 'todo' ? <Todo /> : null}
        <Footer />
      </div>
    </>

  );
}

export default About;