'use client';

import React from 'react';
import Back from '@/components/commons/header/assets/back_arrow.svg';

interface HeaderProps {
  title?: String;
  back?: boolean;
}

const Header = ({ title, back = false }: HeaderProps) => {
  const goBackHandler = () => {
    window.history.back();
  };

  return (
    <div className="h-[60px] flex items-center w-[92%] m-auto">
      {back && (
        <button className="flex cursor-pointer mr-[17px] " onClick={goBackHandler}>
          <Back />
        </button>
      )}
      <h2 className="text-[16px]">{title}</h2>
    </div>
  );
};

export default Header;
