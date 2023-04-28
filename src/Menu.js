import React, { useEffect, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { MdFeaturedPlayList } from 'react-icons/md';
import { GiSkills } from 'react-icons/gi';
import { AiFillMail } from 'react-icons/ai';

const Menu = () => {
  const [opacity, setOpacity] = useState(1);
  const [selected, setSelected] = useState('bio');

  const changeOpacity = (val) => {
    setOpacity(val);
  };
  useEffect(() => {
    if (opacity !== 1) return;
    const t = setTimeout(() => changeOpacity(10), 3000);
    return () => {
      clearTimeout(t);
    };
  }, [opacity]);
  const selectedColor = 'bg-slate-200';

  const menuOptions = [
    {
      label: 'Bio',
      href: 'bio',
      icon: <CgProfile className='text-3xl color-white ' />
    },
    {
      label: 'Experiences',
      href: 'experience',
      icon: <MdFeaturedPlayList className='text-3xl ' />
    },
    {
      label: 'Skills',
      href: 'skills',
      icon: <GiSkills className='text-3xl ' />
    },
    {
      label: 'Contact',
      href: 'contact',
      icon: <AiFillMail className='text-3xl ' />
    }
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`hidden sm:block sm:fixed left-8 h-96 w-24 top-60  opacity-${opacity}`}
      onMouseOver={() => changeOpacity(1)}
    >
      <ul className='flex h-full flex-col justify-around'>
        {menuOptions.map((menu) => {
          return (
            <li
              key={menu.label}
              className={`flex flex-col  justify-center items-center hover:shadow-lg ${
                selected === menu.href ? selectedColor : ''
              } p-2 cursor-pointer`}
              onClick={() => {
                setSelected(menu.href);
                handleScroll(menu.href);
              }}
            >
              {menu.icon}
              <p className='text-center text-sm'>{menu.label}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
