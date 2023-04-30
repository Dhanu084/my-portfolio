import React, { useEffect, useState } from "react";
import { SiJavascript } from "react-icons/si";
import { RiStarSLine, RiStarSFill } from "react-icons/ri";
import { FaPython, FaReact, FaNode, FaAws } from "react-icons/fa";
import { SiJest } from "react-icons/si";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const commonClass = "text-4xl";
const skillsArray = [
  {
    name: "Javascript",
    icon: <SiJavascript className={commonClass} />,
    rating: 4
  },
  {
    name: "Python",
    icon: <FaPython className={commonClass} />,
    rating: 4
  },
  {
    name: "ReactJs",
    icon: <FaReact className={commonClass} />,
    rating: 4
  },
  {
    name: "NodeJs",
    icon: <FaNode className={commonClass} />,
    rating: 3
  },
  {
    name: "AWS",
    icon: <FaAws className={commonClass} />,
    rating: 3
  },

  {
    name: "Jest",
    icon: <SiJest className='text-4xl' />,
    rating: 3
  }
];
const Skills = () => {
  const [observable, setObservable] = useState(null);
  const { shouldAnimate } = useIntersectionObserver(observable);

  useEffect(() => {
    setObservable(document.querySelector("#skills"));
  }, []);

  return (
    <section id='skills' className='h-screen w-screen'>
      <h1 className='text-5xl text-center m-12 sm:m-0 mt-12'>Skills</h1>
      <div className='h-3/4 w-screen flex justify-center items-center'>
        <div className='h-full sm:h-2/3 flex flex-col sm:flex-row'>
          <div className='h-full flex flex-col justify-evenly'>
            {skillsArray.slice(0, skillsArray.length / 2).map((skill) => {
              return (
                <div
                  key={skill.name}
                  className='grid sm:grid-cols-2 gap-0 mt-4'
                >
                  <div
                    className={`m-auto text-4xl text-${skill.color}-400 ${
                      shouldAnimate ? "animate-spin" : ""
                    }`}
                  >
                    {skill.icon}
                  </div>

                  <div>
                    {new Array(5).fill(0).map((s, index) => {
                      if (index + 1 <= skill.rating) {
                        return (
                          <RiStarSFill
                            key={index + skill.rating + ""}
                            className='inline-block text-4xl '
                          />
                        );
                      } else
                        return (
                          <RiStarSLine
                            key={index + skill.rating + ""}
                            className='inline-block text-4xl text-red-500'
                          />
                        );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className='h-full flex flex-col justify-evenly'>
            {skillsArray.slice(skillsArray.length / 2).map((skill) => (
              <div key={skill.name} className='grid sm:grid-cols-2 gap-0 mt-4'>
                <div
                  className={`m-auto text-4xl text-${skill.color}-400 ${
                    shouldAnimate ? "animate-spin" : ""
                  }`}
                >
                  {skill.icon}
                </div>

                <div>
                  {new Array(5).fill(0).map((s, index) => {
                    if (index + 1 <= skill.rating) {
                      return (
                        <RiStarSFill
                          key={index + skill.rating + ""}
                          className='inline-block text-4xl '
                        />
                      );
                    } else
                      return (
                        <RiStarSLine
                          key={index + skill.rating + ""}
                          className='inline-block text-4xl text-red-500'
                        />
                      );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
