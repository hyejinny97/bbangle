import React, { MouseEvent } from 'react';

import Gray from '@/components/commons/button/assets/icn_outlined_heart_gray.svg';
import Red from '@/components/commons/button/assets/icn_outlined_heart_red.svg';

interface ButtonProps {
  isLiked: boolean;
  onClick: (_e: MouseEvent<HTMLButtonElement>) => void;
}

/** @deprecated */
const BtnOutlinedHeart = ({ isLiked, onClick }: ButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    className={`border border-solid border-gray-200 rounded-full p-[13px] ${isLiked ? 'animate-pop' : ''}`}
  >
    {isLiked ? <Red /> : <Gray />}
  </button>
);

export default BtnOutlinedHeart;
