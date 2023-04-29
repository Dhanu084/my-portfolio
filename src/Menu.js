import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { MdFeaturedPlayList } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { AiFillMail } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuOptions = [
    {
      label: "Bio",
      href: "bio",
      icon: <CgProfile className='text-3xl color-white ' />
    },
    {
      label: "Experiences",
      href: "experience",
      icon: <MdFeaturedPlayList className='text-3xl ' />
    },
    {
      label: "Skills",
      href: "skills",
      icon: <GiSkills className='text-3xl ' />
    },
    {
      label: "Contact",
      href: "contact",
      icon: <AiFillMail className='text-3xl ' />
    }
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (showMenu === false) {
    return (
      <FiMenu
        className='fixed mt-2 ml-2 text-3xl cursor-pointer'
        onClick={() => setShowMenu(true)}
      />
    );
  } else
    return (
      <div
        className='fixed h-screen w-4/5 sm:w-2/6 bg-gray-50 z-10'
        onMouseLeave={() => {
          if (showMenu) {
            setTimeout(() => setShowMenu(false), 3000);
          }
        }}
      >
        <ul className='w-full h-full flex flex-col justify-start '>
          <li className='text-right relative mb-4'>
            <IoMdClose
              className='text-right absolute right-2 text-5xl cursor-pointer'
              onClick={() => setShowMenu(false)}
            />
          </li>
          {menuOptions.map(({ label, href }) => (
            <li
              key={href}
              onClick={() => {
                setShowMenu(false);
                handleScroll(href);
              }}
              className='w-full cursor-pointer border-b-2 py-6 pl-4 border-b-gray-200 hover:bg-gray-100'
            >
              <span className='text-2xl'>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default Menu;
