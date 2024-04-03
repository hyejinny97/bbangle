import { toastState } from '@/atoms/atom';
import { ReactNode } from 'react';
import { useRecoilState } from 'recoil';

const useToast = () => {
  const [, setToast] = useRecoilState(toastState);

  const openToast = (toastPopup: ReactNode) => {
    setToast(toastPopup);

    setTimeout(() => {
      closeToast();
    }, 3000);
  };

  const closeToast = () => setToast(null);

  return { openToast, closeToast };
};

export default useToast;
