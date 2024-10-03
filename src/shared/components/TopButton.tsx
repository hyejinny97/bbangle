'use client';

import { useState, useEffect } from 'react';
import ArrowIcons from '@/shared/components/icons/ArrowIcons';

const TopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setShowButton(true);
      else setShowButton(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!showButton) return null;

  return (
    <button
      type="button"
      aria-label="top button"
      className="fixed z-bottomButton bottom-[104px] right-[16px] sm:right-[calc(50%-300px+16px)] w-[46px] h-[46px] flex-center rounded-full bg-white shadow-[0_0_4px_0_rgba(0,0,0,0.16)]"
      onClick={handleClick}
    >
      <ArrowIcons shape="top" />
    </button>
  );
};

export default TopButton;
