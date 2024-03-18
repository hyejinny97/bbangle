'use client';

import { ReactNode } from 'react';

interface PopupProps {
  children: ReactNode;
  className?: string;
}

const Popup = ({ children, className = '' }: PopupProps) => {
  return <div className={`rounded-[12px] bg-white w-[90%] ${className}`}>{children}</div>;
};

export default Popup;
