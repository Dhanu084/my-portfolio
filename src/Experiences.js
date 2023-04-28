import React, { useEffect, useState } from 'react';
import useIntersectionObserver from './hooks/useIntersectionObserver';

const Experiences = () => {
  const [observable, setObservable] = useState(null);
  const { shouldAnimate } = useIntersectionObserver(observable);

  useEffect(() => {
    setObservable(document.querySelector('#experience'));
  }, []);
  return (
    <section id='experience' className='sm:h-screen sm:w-screen '>
      <h1 className='text-5xl text-center m-12 sm:m-0 mt-12'>Experiences</h1>
      <div className='mt-2 h-[1200px]  sm:mt-0 sm:h-3/4 flex flex-col sm:flex-row justify-around items-center sm:px-8'>
        <div
          className={`mx-auto  h-3/5 sm:h-3/5 w-3/4 sm:w-80 shadow-lg ${
            shouldAnimate ? 'animate-bounce' : ''
          }`}
        >
          <div className='relative h-2/5 sm:h-2/5 w-full bg-black  flex justify-center items-center text-xl'>
            <div className='absolute bg-white text-4xl h-40 w-40 text-center -bottom-20 rounded-full flex justify-center items-center shadow-lg text-orange-400'>
              Avalara
            </div>
          </div>
          <div className='h-2/5 sm:h-3/4 p-4 pt-20 mt-2'>
            <ul children='h-full flex flex-col justify-between'>
              <li>
                <span className='font-bold'>Role: </span>{' '}
                <span>Software Engineer</span>
              </li>
              <li>
                <span className='font-bold'>Duration: </span>
                <span>3 years</span>
              </li>
              <li>
                <span className='font-bold'>TechStack: </span> ReactJs, NodeJs,
                Python, .NET, Terraform, AWS{' '}
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`mx-auto mt-12 sm:mt-0 h-3/5 sm:h-3/5 w-3/4 sm:w-80 shadow-lg ${
            shouldAnimate ? 'animate-bounce' : ''
          }`}
        >
          <div className='relative h-2/6 sm:h-2/5 w-full bg-black  flex justify-center items-center text-xl'>
            <div className='absolute bg-white text-4xl h-40 w-40 text-center -bottom-20 rounded-full flex justify-center items-center shadow-lg text-blue-600'>
              Infosys
            </div>
          </div>
          <div className='h-3/4 p-4 pt-20'>
            jgiu iuf iufufi ufiuf iufiuf iufuifi fiuf iuyfyfy ftydtrdy
            dtrytufriyf yyfiy fuydut dtd ydtdyt dtysy dtd udud udutdu uydudtye
          </div>
        </div>

        <div
          className={`mx-auto mt-12 sm:mt-0 h-3/5 sm:h-3/5 w-3/4 sm:w-80 shadow-lg ${
            shouldAnimate ? 'animate-bounce' : ''
          }`}
        >
          <div className='relative h-2/6 sm:h-2/5 w-full bg-black  flex justify-center items-center text-xl'>
            <div className='absolute bg-white text-4xl h-40 w-40 text-center -bottom-20 rounded-full flex justify-center items-center shadow-lg text-orange-600'>
              Coding Ninjas
            </div>
          </div>
          <div className='h-3/4 p-4 pt-20'>
            jgiu iuf iufufi ufiuf iufiuf iufuifi fiuf iuyfyfy ftydtrdy
            dtrytufriyf yyfiy fuydut dtd ydtdyt dtysy dtd udud udutdu uydudtye
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
