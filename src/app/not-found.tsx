'use client';

import Button from '@/shared/components/Button';
import Link from 'next/link';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import SadBbangleBox from '@/shared/components/SadBbangleBox';

const Custom404 = () => (
  <PaddingWrapper className="flex flex-wrap gap-x-[4%] gap-y-4">
    <SadBbangleBox className="h-[80vh]">
      <p>잘못된 경로에요!</p>
      <p>요청한 페이지를 찾을 수 없어요😢</p>
    </SadBbangleBox>
    <div className="bg-white w-full max-w-[600px] mx-auto p-[16px] fixed flex gap-[10px] left-0 right-0 bottom-0 z-[5000]">
      <div className="flex-1">
        <Link href="/">
          <Button variants="primary-black">홈으로 가기</Button>
        </Link>
      </div>
    </div>
  </PaddingWrapper>
);

export default Custom404;
