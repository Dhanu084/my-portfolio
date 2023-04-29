import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const commonClassName =
  "text-3xl cursor-pointer hover:shadow-gray-300 shadow-lg";

const icons = {
  linkedin: {
    url: "https://www.linkedin.com/in/dhanush-kiran-60915217b",
    icon: <FaLinkedin className={commonClassName} />
  },
  github: {
    url: "https://github.com/Dhanu084",
    icon: <FaGithub className={commonClassName} />
  },
  leetcode: {
    url: "https://leetcode.com/dhanu084",
    icon: <SiLeetcode className={commonClassName} />
  }
};

const Bio = () => (
  <section
    id='bio'
    className='flex flex-col h-screen w-screen justify-center items-center snap-start'
  >
    <div className='h-80 w-80 border-4 border-grey-500 rounded-full shadow-xl  bg-[url("/static/image.jpg")] bg-center bg-cover animate-spin1'></div>
    <h1 className='text-5xl mt-8'>Dhanush Kiran</h1>
    <h2 className='text-2xl mt-2'>Software Engineer</h2>
    <ul className='w-48 flex mt-8 justify-between'>
      {Object.entries(icons).map(([key, value]) => {
        const { url, icon } = value;
        return (
          <li key={key}>
            <a href={url} target='_blank'>
              {icon}
            </a>
          </li>
        );
      })}
    </ul>
  </section>
);

export default Bio;
