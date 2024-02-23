import React, { MouseEvent } from 'react';

interface ButtonProps {
  title: String;
  active: Boolean;
  onClick: (_e: MouseEvent<HTMLButtonElement>) => void;
}

function Btn({ title, active, onClick }: ButtonProps) {
  return (
    <button
      className={`w-full  py-[14px] text-center text-base leading-normal font-medium rounded-[999px] ${
        active
          ? 'text-white bg-[#212121] '
          : 'text-[#212121] bg-white border border-solid border-[#EEEEEE]'
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Btn;
