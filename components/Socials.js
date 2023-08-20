// links
import Link from 'next/link';

// icons
import {
  RiLinkedinFill,
  RiGithubFill,
} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className='flex items-center gap-x-6 text-lg'>
      <Link href={'https://www.linkedin.com/in/lakshya-swarup/'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinFill 
          size={25}
        />
      </Link>
      <Link href={'https://github.com/Aim-Swarup'} className='hover:text-accent transition-all duration-300'>
        <RiGithubFill
          size={25} 
        />
      </Link>
    </div>
  );
};

export default Socials;
