'use client';

import Button from '@/components/commons/button/client/Button';
import Link from 'next/link';

function ButtonSection() {
  return (
    <div className="flex gap-[10px] w-full">
      <Button type="button" variants="primary-white">
        <Link href="/">건너뛰기</Link>
      </Button>
      <Button type="submit" variants="primary-black">
        완료
      </Button>
    </div>
  );
}

export default ButtonSection;
