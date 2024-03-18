'use client';

import { ReactNode } from 'react';
import Icon from '../../Icon';
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
      initial={{ bottom: '-100%' }}
      animate={{ bottom: 0 }}
      exit={{ bottom: '-100%' }}
      className="absolute w-full max-w-[600px] bg-white z-[5001] rounded-t-2xl pb-4"
    >
      <div className="relative py-4">
        <h4 className="text-center">{title}</h4>
        <button className="absolute -translate-y-1/2 right-5 top-1/2" onClick={closeModal}>
          <Icon.close />
        </button>
      </div>
      {children}
    </motion.div>
  );
};

export default UpModalNewVer;
