'use client';

import Button from '@/components/commons/button/client/Button';

function ButtonSection() {
  return (
    <div className="flex gap-[10px] w-full">
      <Button variants="primary-white">건너뛰기</Button>
      <Button type="submit" variants="primary-black">
        완료
      </Button>
    </div>
  );
}

export default ButtonSection;
