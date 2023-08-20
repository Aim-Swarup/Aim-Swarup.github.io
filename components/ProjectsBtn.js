// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// icons
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <div className='mx-auto z-30 xl:mx-0'>
      <Link
        href={'/work'}
        className='relative w-[135px] h-[135px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'
      >
        <Image
          src={'/rounded-text.png'}
          width={91}
          height={98}
          alt=''
          className='animate-spin-slow w-full h-full max-w-[91px] max-h-[98px]'
        />
        <HiArrowRight className='absolute text-2xl group-hover:translate-x-2 transition-all duration-300' />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
