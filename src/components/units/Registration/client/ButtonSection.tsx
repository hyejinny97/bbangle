'use client';

import Button from '@/components/commons/button/client/Button';

function ButtonSection() {
  return (
    <div className="flex gap-[10px]">
      <Button variants="primary-white" onClick={() => {}}>
        건너뛰기
      </Button>
      <Button variants="primary-black" onClick={() => {}}>
        완료
      </Button>
    </div>
  );
}

export default ButtonSection;
