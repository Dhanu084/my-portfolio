import React, { useRef } from "react";
import { SiJavascript } from "react-icons/si";
import { FaPython, FaReact, FaNode, FaAws } from "react-icons/fa";
import { SiJest } from "react-icons/si";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { Card } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
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

const cardVariance = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const RightOutlinedItem = ({ children }) => {
  return (
    <p style={{ lineHeight: "2rem" }}>
      <RightOutlined /> {children}
    </p>
  );
};
const Skills = () => {
  const observable = useRef(null);
  const { shouldAnimate } = useIntersectionObserver(observable);

  return (
    <motion.section
      id='skills'
      className='h-auto w-screen my-'
      ref={observable}
      variants={cardVariance}
      initial='hidden'
      whileInView='visible'
    >
      <h1 className='text-5xl text-center m-12 sm:m-0 mt-4'>Skills</h1>
      <div className='h-3/4 w-screen flex justify-center items-center'>
        <div className='h-full w-3/4 sm:h-2/3 flex flex-col sm:flex-row mt-2'>
          <Card
            title='Technical Skills'
            bordered={true}
            style={{ width: "100%" }}
          >
            {skillsArray.map((skill) => {
              return (
                <RightOutlinedItem key={skill.name}>
                  <span>{skill.name}</span>
                </RightOutlinedItem>
              );
            })}
          </Card>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
