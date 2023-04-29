import React, { useEffect, useState } from "react";
import useIntersectionObserver from "./hooks/useIntersectionObserver";

const experienceList = [
  {
    companyName: "Avalara",
    designation: "Software Engineer",
    duration: "3 years",
    techStack: "ReactJs, NodeJs, Redux, Python, .NET, Terraform, AWS",
    brandColor: "text-orange-400"
  },
  {
    companyName: "Infosys",
    designation: "Systems Engineer",
    duration: "1.5 years",
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

const Experiences = () => {
  const [observable, setObservable] = useState(null);
  const { shouldAnimate } = useIntersectionObserver(observable);

  useEffect(() => {
    setObservable(document.querySelector("#experience"));
  }, []);
  return (
    <section
      id='experience'
      className='sm:h-screen sm:w-screen flex flex-col justify-around'
    >
      <h1 className='text-5xl text-center m-12 sm:m-0 mt-12'>Experiences</h1>
      <div className='mt-4 h-[1200px]  sm:mt-0 sm:h-4/5 flex flex-col sm:flex-row justify-around items-center  sm:px-8 '>
        {experienceList.map(
          ({ companyName, duration, techStack, designation, brandColor }) => (
            <div
              className={`mx-auto mt-4 sm:mt-0  h-3/5 sm:h-3/5 lg:h-3/4 w-3/4 sm:w-80 shadow-lg ${
                shouldAnimate ? "animate-bounce" : ""
              }`}
              key={companyName}
            >
              <div className='relative h-2/5 sm:h-2/5 w-full bg-black  flex justify-center items-center text-xl'>
                <div
                  className={`absolute bg-white text-4xl h-40 w-40 text-center -bottom-20 rounded-full flex justify-center items-center shadow-lg ${brandColor}`}
                >
                  {companyName}
                </div>
              </div>
              <div className='h-2/5 sm:h-3/5 p-4 pt-20 mt-2'>
                <ul children='h-full flex flex-col justify-between'>
                  <li>
                    <span className='font-bold'>Role: </span>{" "}
                    <span>{designation}</span>
                  </li>
                  <li>
                    <span className='font-bold'>Duration: </span>
                    <span>{duration}</span>
                  </li>
                  {techStack && (
                    <li>
                      <span className='font-bold'>TechStack: </span>
                      {techStack}{" "}
                    </li>
                  )}
                </ul>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Experiences;
