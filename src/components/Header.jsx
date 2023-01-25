import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  const socials = [
    {
      name: 'Github',
      link: 'https://github.com/brianpham97',
      style: 'social-blue'
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/lbrian-phaml/',
      style: 'social-purple'
    }
  ]

  return (
    <nav name="header" className="w-full h-20 flex justify-between items-center bg-black px-6">
      <Link to='/'>
        <h1 id="logo" className="text-5xl text-white font-logo ml-2">BPham</h1>
      </Link>
      <ul className='flex gap-4 mr-2'>
        {socials.map((social, index) => {
          return (
            <li key={index} className={`${social.style} px-4 py-2`}>
              <a href={social.link} target="_blank">{social.name}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  );
}

export default Header;