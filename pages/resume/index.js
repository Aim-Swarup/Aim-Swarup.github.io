import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import { fadeIn } from '../../variants';
import { BsArrowRight } from 'react-icons/bs'

const LakshyaSwarupResume = () => {
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
    const [isImageHovered, setIsImageHovered] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileOrTablet(window.innerWidth <= 768);
        };

        handleResize(); // Check on initial mount

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (isMobileOrTablet) {
        return (
            <div className='flex flex-col justify-center items-center overflow-y-scroll'>
                <motion.div
                    variants={fadeIn('down', 0.6)}
                    initial='hidden'
                    animate='show'
                    className='flex flex-col justify-center items-center h-screen duration-600'
                >
                    <div className='w-[80%]'>
                        <Tilt>
                            <a href='https://drive.google.com/file/d/1AXMGFJxiNwFL8l4vJnHELONFjf9dPFvq/view' target='_blank' rel='noopener noreferrer'>
                                <Image
                                    src={'/Resume-Lakshya-Swarup.jpg'}
                                    layout='responsive'
                                    width={737}
                                    height={678}
                                    alt=''
                                    className='w-full h-full rounded-lg overflow-hidden'
                                />
                            </a>
                        </Tilt>
                    </div>
                    <a href='https://drive.google.com/file/d/1AXMGFJxiNwFL8l4vJnHELONFjf9dPFvq/view' target='_blank' rel='noopener noreferrer'>
                        <button 
                            className='btn mt-4 rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
                        >
                            <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                                Let&apos;s go!
                            </span>
                            <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
                        </button>
                    </a>
                </motion.div>
            </div>
        );
    }

    return (
        <div className='flex z-40 w-full h-full bottom-0'>
            <embed
                className='z-40 overflow-y-scroll w-full h-full'
                src="Resume-Lakshya-Swarup.pdf"
                width="100%"
            />
        </div>
    );
}

export default LakshyaSwarupResume;