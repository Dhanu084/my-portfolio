import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Bio = () => (
  <section
    id='bio'
    className='flex flex-col h-screen w-screen justify-center items-center snap-start'
  >
    <div className='h-80 w-80 border-4 border-grey-500 rounded-full shadow-xl  bg-[url("/static/image.jpg")] bg-center bg-cover animate-spin'></div>
    <h1 className='text-5xl mt-8'>Dhanush Kiran</h1>
    <h2 className='text-2xl mt-2'>Software Engineer</h2>
    <ul className='w-48 flex mt-8 justify-between'>
      <li>
        <FaLinkedin className='text-3xl cursor-pointer hover:shadow-indigo-300 shadow-lg' />
      </li>
      <li>
        <FaGithub className='text-3xl cursor-pointer hover:shadow-indigo-300 shadow-xl' />
      </li>
      <li>
        <SiLeetcode className='text-3xl cursor-pointer hover:shadow-indigo-300 shadow-lg' />
      </li>
    </ul>
  </section>
);

export default Bio;
