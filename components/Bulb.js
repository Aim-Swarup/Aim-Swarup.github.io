// next image
import Image from 'next/image';

const Bulb = () => {
  return (
    <div className='absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[180px] xl:w-[240px]'>
      <Image
        src={'/bulb.png'}
        width={240}
        height={180}
        className='w-full h-full'
        alt=''
      />
    </div>
  );
};

export default Bulb;
