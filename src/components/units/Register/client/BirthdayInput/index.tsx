'use client';

import usePopup from '@/commons/hooks/usePopup';
import { getInputStyle } from '@/commons/utils';
import BirthdayPopup from './BirthdayPopup';

const BirthdayInput = () => {
  const { openPopup } = usePopup();

  const openBirthdayPopup = () => openPopup(<BirthdayPopup />);

  return (
    <div className={getInputStyle()} onClick={openBirthdayPopup}>
      <div className="text-center">+ 추가하기</div>
    </div>
  );
};

export default BirthdayInput;
