import React, { MouseEvent } from 'react';
import Red from '@/components/commons/button/assets/icn_outlined_heart_red.svg';
import Gray from '@/components/commons/button/assets/icn_outlined_heart_gray.svg';

interface ButtonProps {
  isLiked: boolean;
  onClick: (_e: MouseEvent<HTMLButtonElement>) => void;
}

function BtnOutlinedHeart({ isLiked, onClick }: ButtonProps) {
  return (
    <div className="w-full text-center">
      <button
        onClick={onClick}
        className="border border-solid border-[#EEEEEE] rounded-[999px] p-[13px]"
      >
        <div className={isLiked ? 'animate-pop' : ''}>{isLiked ? <Red /> : <Gray />}</div>
      </button>
    </div>
  );
}

export default BtnOutlinedHeart;
