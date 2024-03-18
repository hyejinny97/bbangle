'use client';

import { toastState } from '@/atoms/atom';
import { AnimatePresence } from 'framer-motion';
import { useRecoilValue } from 'recoil';

const ToastContainer = () => {
  const toast = useRecoilValue(toastState);

  const toastVisible = !!toast;

  return (
    <AnimatePresence>
      {toastVisible && (
        <div
          className="fixed left-1/2 -translate-x-1/2  
        h-[100px] bottom-0 max-w-[600px] w-full flex items-center justify-center  z-toast"
        >
          {toast}
        </div>
      )}
    </AnimatePresence>
  );
};

export default ToastContainer;
