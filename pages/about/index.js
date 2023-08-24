import React, { useState } from 'react';

// icons
import {
  FaJava,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaGit,
  FaGithub,
} from 'react-icons/fa';

import {
  PiTreeStructureFill
} from 'react-icons/pi';

import {
  TbHexagonLetterC,
} from 'react-icons/tb';

import {
  MdDataObject
} from 'react-icons/md';

import {
  SiNextdotjs,
  SiFramer,
  SiCplusplus,
  SiKotlin,
  SiRstudio,
  SiExpress,
  SiAnaconda,
  SiAndroidstudio,
  SiGooglecolab,
  SiVisualstudiocode,
  SiPycharm,
  SiCanva,
  SiAdobe,
  SiMicrosoft,
  SiLinux,
  SiApple,
} from 'react-icons/si';

//  about data
export const aboutData = [
  {
    title: 'technical skills',
    info: [
      {
        title: 'Languages & Frameworks',
        icons: [
          <TbHexagonLetterC key="C language"/>,
          <SiCplusplus key="C++"/>,
          <FaJava key="Java"/>,
          <FaPython key="Python"/>,
          <SiKotlin key="Kotlin"/>,
          <SiRstudio key="R Programming"/>,
        ],
      },
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="HTML"/>,
          <FaCss3 key="CSS"/>,
          <FaJs key="JavaScript"/>,
          <FaReact key="React"/>,
          <SiNextdotjs key="NextJS"/>,
          <SiFramer key="Framer"/>,
          <SiExpress key="Express"/>,
        ],
      },
      {
        title: 'Software & Tools',
        icons: [
          <SiAndroidstudio key="Android Studios"/>, 
          <SiAnaconda key="Anaconda" />, 
          <SiGooglecolab key="Google Colaboratory" />, 
          <SiVisualstudiocode key="Visual Studio - Code" />, 
          <SiPycharm key="Pycharm" />,
          <SiCanva key="Canva" />,
          <SiAdobe key="Adobe" />,
          <SiMicrosoft key="Microsoft" />,
          <SiLinux key="Linux" />,
          <SiApple key="Apple" />,
        ],
      },
      {
        title: 'Other Skills',
        icons: [
          <PiTreeStructureFill key="Data Structure and Algorithms"/>, 
          <MdDataObject key="Object Oriented Programming" />, 
          <FaGit key="Git" />, 
          <FaGithub key="Github" />, 
        ],
      },
    ],
  },
  {
    title: 'Certificates',
    info: [
      {
        title: 'IBM Certified Introduction to Cloud Computing',
        stage: 'May 2023',
      },
      {
        title: 'Microsoft Certified: Azure Fundamentals',
        stage: 'May 2023',
      },
      {
        title: 'Microsoft Certified: Power Platform Fundamentals',
        stage: 'May 2023',
      },
      {
        title: "Google: Cloud Technical Series'23",
        stage: 'Apr 2023',
      },
      {
        title: 'Forage: Developer Virtual Experience Program',
        stage: 'Jan 2023',
      },
      {
        title: 'Coursera: Design Digital Products using Canva',
        stage: 'Nov 2022',
      },
      {
        title: 'Coursera: Create logos using Canva for an ebrand',
        stage: 'Nov 2022',
      },
      {
        title: 'Coursera: Get Started with Adobe Illustrator',
        stage: 'Nov 2022',
      },
      {
        title: 'NVIDIA: Fundamentals of Deep Learning',
        stage: 'Sep 2022',
      },
    ],
  },
];

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  const [hoveredIcon, setHoveredIcon] = useState(null); // State to track hovered icon
  console.log(index);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left overflow-y-scroll'>
      <Circles />
      {/* avatar img */}
      <motion.div 
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden' 
        className='hidden xl:flex max-w-[380px] max-h-[330px] absolute bottom-0 -left-[220px]'
      >
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 z-30 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden' 
            className='h2'
          >
            Coding the <span className='text-accent'>web</span> <br /> weaving possibilities.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] z-30 mx-auto xl:mx-0 mb-2 xl:mb-2 px-2 xl:px-0'
          >
            A student @VIT. <br /> I am seeking an opportunity to leverage 
            and enhance my coding and app development proficiencies. 
            I am a diligent student, driven to make meaningful contributions 
            and acquire extensive knowledge.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden' 
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          >
            <div className='flex flex-1 xl:gap-x-6'>
              {/* Technical Skills */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={27} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[200px]'>
                  Technical Skills
                </div>
              </div>
              {/* Certifications */}
              <div className='relative flex-1'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={9} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[200px]'>
                  Certifications
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[300px]'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <motion.div
                  key={itemIndex}
                  className={`cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:absolute after:-bottom-1 after:left-0 ${
                    index === itemIndex
                      ? 'after:w-full after:bg-accent after:transition-all after:duration-300 text-accent'
                      : 'after:w-8 after:bg-white after:transition-300'
                  }`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </motion.div>
              );
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div 
                  key={itemIndex}
                  className='flex-1 flex flex-col md:flex-row mac-w-max gap-x-2 items-center text-white/60'
                  >
                    {/* title */}
                    <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                    <div className='hidden md:flex'>-</div>
                    <div>{item.stage}</div>
                    <div className='flex gap-x-4'>
                      {/* icons */}
                      {item.icons?.map((icon, itemIndex) => {
                        return <
                          // div className='text-2xl text-white'  key={itemIndex} setHoveredIcon={key} >{icon}</div>
                          div
                            className='text-2xl text-white relative' // Added 'relative' class
                            key={itemIndex}
                            onMouseEnter={() => setHoveredIcon(icon.key)} // Set hovered icon on mouse enter
                            onMouseLeave={() => setHoveredIcon(null)}    // Reset hovered icon on mouse leave
                          >
                            {icon}
                            {hoveredIcon === icon.key && ( // Show tooltip when the icon is hovered
                              <div className='absolute top-[-36px] left-1/2 transform -translate-x-1/2'>
                                <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
                                  <div className='text-[12px] leading-none font-semibold capitalize whitespace-nowrap'>
                                    {icon.key}
                                  </div>
                                  {/* Triangle */}
                                  <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -bottom-2 top-[100%] left-1/2 transform -translate-x-1/2 rotate-90'></div>
                                </div>
                              </div>
                            )}
                          </div>
                      })}
                    </div>
                  </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
