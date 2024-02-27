'use client';

import { useState } from 'react';
import CheckBoxNewVer from '@/components/commons/checkbox/client/CheckboxNewVer';

const Agree = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <CheckBoxNewVer isChecked={isChecked} onChange={handleCheckClick}>
      <div
        className={`underline underline-offset-2 text-[12px] font-medium ${
          isChecked ? 'text-primaryOrangeRed' : 'text-gray-900'
        }`}
      >
        회원탈퇴 유의사항을 확인했으며 이에 동의합니다.
      </div>
    </CheckBoxNewVer>
  );
};

export default Agree;
