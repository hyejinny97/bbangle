'use client';

import { BbangleSadIcon } from '@/components/commons/Icon';
import Button from '@/components/commons/button/client/Button';
import Link from 'next/link';
import PaddingWrapper from '@/components/commons/PaddingWrapper';

const Custom404 = () => {
  return (
    <PaddingWrapper className="flex flex-wrap gap-x-[4%] gap-y-4">
      <div className="flex flex-col items-center justify-center w-full h-[80vh] gap-2">
        <BbangleSadIcon />
        <div className="text-gray-500 text-center font-normal text-14 leading-150 tracking-tight-2">
          <p>잘못된 경로에요!</p>
          <p>요청한 페이지를 찾을 수 없어요😢</p>
        </div>
      </div>
      <div className="bg-white w-full max-w-[600px] mx-auto p-[16px] fixed flex gap-[10px] left-0 right-0 bottom-0 z-[5000]">
        <div className="flex-1">
          <Link href="/">
            <Button variants="primary-black">홈으로 가기</Button>
          </Link>
        </div>
      </div>
    </PaddingWrapper>
  );
};

export default Custom404;
