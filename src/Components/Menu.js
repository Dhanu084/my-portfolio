import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { MdFeaturedPlayList } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { AiFillMail } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const commonThemeIconClasses = "text-2xl cursor-pointer";

const Menu = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const menuOptions = [
    {
      label: "Profile",
      href: "profile",
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

  return (
    <>
      {!showMenu && (
        <FiMenu
          className='fixed mt-2 ml-2 text-3xl cursor-pointer'
          onClick={() => setShowMenu(true)}
        />
      )}
      <div
        className={`transform fixed h-screen w-4/5 sm:w-2/6 bg-gray-50 dark:bg-black  z-10 ease-in-out transition-all duration-300 ${
          showMenu ? "left-0" : "-left-[1000px]"
        }  dark:border-r-2 border-gray-300`}
        onMouseLeave={() => {
          if (showMenu) {
            setTimeout(() => setShowMenu(false), 3000);
          }
        }}
      >
        <ul className='w-full h-full flex flex-col justify-start '>
          <li className='text-right relative mb-4 py-4 pl-4'>
            <span>
              {theme === "light" ? (
                <CiLight
                  onClick={() => setTheme("dark")}
                  className={commonThemeIconClasses}
                />
              ) : (
                <MdDarkMode
                  onClick={() => setTheme("light")}
                  className={commonThemeIconClasses}
                />
              )}
            </span>
            <IoMdClose
              className={`text-right absolute right-2 top-1 text-5xl cursor-pointer ${
                showMenu ? "animate-spin1" : ""
              } `}
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
              className={`cursor-pointer border-b-2 py-6 pl-4 border-b-gray-200 hover:bg-gray-100 dark:hover:text-black`}
            >
              <span className='text-2xl'>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;
