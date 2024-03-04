import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  title: String;
  icon: React.ReactElement;
  page: string;
  isActive: boolean;
}

const Button = ({ title, icon, page, isActive }: ButtonProps) => {
  return (
    <Link
      href={page}
      className="flex flex-col items-center justify-center w-1/5 gap-2 cursor-pointer"
    >
      {icon}
      <span
        className={`text-neutral-400 text-xs font-normal leading-[18px] ${isActive ? 'text-primaryOrangeRed' : 'text-gray-500'}`}
      >
        {title}
      </span>
    </Link>
  );
};
export default Button;
