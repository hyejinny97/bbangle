'use client';

import { MouseEvent } from 'react';

interface TabButtonProps {
  name: string;
  isActive: boolean;
  onClick: (_e: MouseEvent<HTMLDivElement>) => void;
}

const TabButton = ({ name, isActive, onClick }: TabButtonProps) => {
  return (
    <div
      className={`inline-flex self-stretch grow shrink basis-0 py-2.5 justify-center items-center text-sm leading-[21px] cursor-pointer ${
        isActive ? 'text-gray-900 font-medium' : 'text-gray-500 font-normal'
      }`}
      onClick={onClick}
    >
      {name}
    </div>
  );
};

export default TabButton;
