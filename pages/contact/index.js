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

// parallax-tilt
import Tilt from 'react-parallax-tilt';

const Contact = () => {
  const [isImageHovered, setIsImageHovered] = useState(false);
  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center xl:justify-end h-full gap-x-6'>
        {/* text & form */}
        <div className='flex flex-col w-full xl:w-[65%] max-w-[700px] z-30'>
          {/* text */}
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'
          >
            Let&apos;s <span className='text-accent'>connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
            action="https://formsubmit.co/5a154e2b5a2e0dc021399b1c2a6ed659"
            method="POST"
          >
            {/* input group */}
            <div className='flex gap-x-6 w-full'>
              <input type='text' name='name' placeholder='name' className='input' required />
              <input type='text' name='email' placeholder='email' className='input' required />
            </div>
            <input type='text' name='subject' placeholder='subject' className='input' />
            <input type='hidden' name='_captcha' value='false' />
            <input type='hidden' name='_next' value='https://aim-swarup.github.io/thank-you' />
            <textarea name='message' placeholder='message' className='textarea'></textarea>
            <button 
              type='submit'
              className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
              >
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Let&apos;s talk
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </motion.form>
        </div>
        {/* image */}
        <motion.div
          variants={fadeIn('down', 0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='hidden xl:flex xl:w-[35%] overflow-hidden justify-center duration-600'
        >
          <div className={`w-[80%] h-[80%] max-w max-h`} >
            <Tilt glareEnable={true} glareMaxOpacity={0.9} glareColor="lightblue" glarePosition="all">
              <Image
                src={'/me.png'}
                width={737}
                height={678}
                alt=''
                className='w-full h-full max-w max-h'
              />
            </Tilt>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
