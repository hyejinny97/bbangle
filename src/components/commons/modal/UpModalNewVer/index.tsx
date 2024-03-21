'use client';

import { ReactNode } from 'react';
import { CloseIcon } from '../../Icon';
import useModal from '@/commons/hooks/useModal';
import { motion } from 'framer-motion';

interface UpModalProps {
  title: string;
  children: ReactNode;
}

const UpModalNewVer = ({ title, children }: UpModalProps) => {
  const { closeModal } = useModal();

  return (
    <motion.div
      key="modal"
      initial={{ translateY: '100%' }}
      animate={{ translateY: 0 }}
      exit={{ translateY: '100%' }}
      transition={{
        ease: 'linear',
        duration: 0.2
      }}
      className="absolute w-full max-w-[600px] max-h-[100vh] overflow-y-scroll scrollbar-hide bg-white z-[5001] rounded-t-[12px]"
    >
      <div className="flex items-center px-[16px] py-[10px]">
        <h4 className="flex-1 text-center font-medium text-16 leading-150 tracking-tight-2">
          {title}
        </h4>
        <button onClick={closeModal}>
          <CloseIcon className="cursor-pointer" />
        </button>
      </div>
      {children}
    </motion.div>
  );
};

export default UpModalNewVer;
