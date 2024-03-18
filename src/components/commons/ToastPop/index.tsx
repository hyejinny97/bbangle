import useToast from '@/commons/hooks/useToast';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface IToastPopProps {
  children: ReactNode;
}

const ToastPop = ({ children }: IToastPopProps) => {
  const { closeToast } = useToast();

  return (
    <motion.div
      onClick={closeToast}
      initial={{ bottom: 0 }}
      animate={{ bottom: '100%' }}
      exit={{ bottom: 0 }}
      drag="y"
      className="absolute w-[80%] p-4 bg-gray-800 rounded-lg "
    >
      <span className="text-sm text-white">{children}</span>
    </motion.div>
  );
};

export default ToastPop;
