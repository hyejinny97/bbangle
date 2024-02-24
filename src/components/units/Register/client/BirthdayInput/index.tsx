'use client';

import usePopup from '@/commons/hooks/usePopup';
import BirthdayPopup from './BirthdayPopup';
import { twMerge } from 'tailwind-merge';
import { INPUT_STYLE } from '@/commons/constants/inputStyle';

const BirthdayInput = () => {
  const { openPopup } = usePopup();

  const openBirthdayPopup = () => openPopup(<BirthdayPopup />);

  return (
    <div>
      <div className="mb-[6px]">생년월일</div>
      <div className={twMerge(INPUT_STYLE, 'hover:cursor-pointer')} onClick={openBirthdayPopup}>
        <div className="text-center">+ 추가하기</div>
      </div>
    </div>
  );
};

export default BirthdayInput;
