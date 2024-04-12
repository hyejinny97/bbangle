import { toastState } from '@/shared/atoms/alert';
import { ReactNode } from 'react';
import { useRecoilState } from 'recoil';

const useToast = () => {
  const [, setToast] = useRecoilState(toastState);

  const closeToast = () => setToast(null);

  const openToast = (toastPopup: ReactNode) => {
    setToast(toastPopup);

    setTimeout(() => {
      closeToast();
    }, 3000);
  };

  return { openToast, closeToast };
};

export default useToast;
