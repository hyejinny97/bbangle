'use client';

import Image from 'next/image';
import LoadingGif from '@/../public/assets/loading.gif';

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[5000] bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative w-[50px] h-[50px]">
        <Image src={LoadingGif} alt="Loading..." layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default Loading;
