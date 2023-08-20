// icons
import { BsArrowRight } from 'react-icons/bs'

// framer
import { motion } from 'framer-motion'

// next image
import Image from 'next/image';

// react
import React, { useState } from 'react';

// variants
import {fadeIn} from '../../variants'

const Contact = () => {
  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center xl:justify-end h-full gap-x-6'>
        {/* text & form */}
        <div className='flex flex-col w-full xl:w-full max-w-[1000px] z-30'>
          {/* text */}
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'
          >
            Thank <span className='text-accent'>you,</span> message sent sucessfully!
          </motion.h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
