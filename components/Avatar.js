// next image
import Image from 'next/image';

// framer-motion
import { motion } from 'framer-motion';

const Avatar = () => {
  return (
    <motion.div 
      initial={{ y: 0 }} // Initial position
      animate={{ y: -40, rotate: 4 }} // Floating and rotating animation
      transition={{ delay: 2, duration: 3, repeat: Infinity, repeatType: "reverse" }} // Animation settings
      className='hidden xl:flex xl:max-w-none'>
      <Image
        src={'/astronaut.png'}
        width={737}
        height={678}
        alt=''
        className='w-full h-full max-w max-h'
      />
    </motion.div>
  );
};

export default Avatar;
