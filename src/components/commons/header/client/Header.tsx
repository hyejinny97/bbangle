'use client';

import React from 'react';
import Back from '@/components/commons/header/assets/back_arrow.svg';
import PaddingWrapper from '@/components/commons/PaddingWrapper';

interface HeaderProps {
  title?: String;
  back?: boolean;
}

const Header = ({ title, back = false }: HeaderProps) => {
  const goBackHandler = () => {
    window.history.back();
  };

  return (
    <PaddingWrapper className="h-[60px] flex items-center">
      {back && (
        <button className="flex cursor-pointer mr-[17px]" onClick={goBackHandler}>
          <Back />
        </button>
      )}
      <h2 className="text-16">{title}</h2>
    </PaddingWrapper>
  );
};

export default Header;
