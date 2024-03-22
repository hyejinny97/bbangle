// TabBtton, TabContainer 삭제하고 이걸로 쓸 것
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TabButtonProps {
  children: ReactNode;
  active?: boolean;
}

const TabButton = ({ children, active = false, ...props }: TabButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center 
        relative h-[44px] w-full text-14 leading-150 tracking-tight-2 
        border-b-2 border-gray-100 
        ${active ? 'text-gray-900' : 'text-gray-500'} 
      `}
      {...props}
    >
      {children}
      {active && (
        <motion.div
          layoutId="tab"
          className="absolute z-10 -bottom-[2px] h-[2px] bg-gray-900 w-full"
        />
      )}
    </button>
  );
};

export default TabButton;
