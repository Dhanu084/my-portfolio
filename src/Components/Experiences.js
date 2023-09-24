import React, { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { motion } from "framer-motion";
import { Card, Timeline } from "antd";

const experienceList = [
  {
    companyName: "Tekion Corp",
    designation: "Software Engineer II",
    duration: "Present",
    techStack: "ReactJs",
    brandColor: "text-teal-600"
  },
  {
    companyName: "Avalara",
    designation: "Software Engineer",
    duration: "3 years",
    techStack: "ReactJs, NodeJs, Redux, Python, AWS",
    brandColor: "text-orange-400"
  },
  {
    companyName: "Infosys",
    designation: "Systems Engineer",
    duration: "1.5 years",
    techStack: "IBM tools",
    brandColor: "text-blue-400"
  },
  {
    companyName: "Coding Ninjas",
    designation: "Teaching Assistant",
    duration: "2 months",
    techStack: "Python, Data structures",
    brandColor: "text-orange-500"
  }
];

const cardVariance = {
  hidden: { opacity: 1, translateX: "-40vw" },
  visible: {
    opacity: 1,
    translateX: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const createTimeLineItems = () => {
  const items = experienceList.map((exp) => ({
    // label: exp.duration,
    color: exp.companyName === experienceList[0].companyName ? "green" : "gray",
    children: (
      <motion.div
        variants={cardVariance}
        initial='hidden'
        whileInView='visible'
        style={{ fontWeight: "bold" }}
      >
        <Card bordered={true} style={{ width: "auto" }} hoverable={true}>
          <h4 className={exp.brandColor}>{exp.companyName}</h4>
          <p>{exp.designation}</p>
          <p>
            <small>{exp.duration}</small>
          </p>
          <p>{exp.techStack}</p>
        </Card>
      </motion.div>
    )
  }));
  return items;
};

const Experiences = () => {
  const observable = useRef(null);
  // const { shouldAnimate } = useIntersectionObserver(observable);

  return (
    <section
      id='experience'
      className='h-auto w-screen flex flex-col justify-around '
    >
      <h1 className='text-5xl text-center m-12 sm:m-0 mt-2'>Experiences</h1>
      {/* <div className='mt-4 h-[6000px]  sm:mt-0 sm:h-4/5 flex flex-col sm:flex-row justify-around items-center  sm:px-8 '> */}
      <div className='h-3/4 w-3/4 md:mt-8 mx-auto '>
        <Timeline items={createTimeLineItems()} />
      </div>
      {/* </div> */}
    </section>
  );
};

export default Experiences;
