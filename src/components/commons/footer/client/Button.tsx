'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

interface ButtonProps {
  title: String;
  icon: React.ReactElement;
  page: string;
}

const Header = ({ title, icon, page }: ButtonProps) => {
  const router = useRouter();
  return (
    <button
      className="flex flex-col items-center justify-center w-1/5 gap-2 cursor-pointer"
      onClick={() => router.push(page)}
    >
      {icon}
      <span className="text-neutral-400 text-xs font-normal leading-[18px]">{title}</span>
    </button>
  );
};
export default Header;
