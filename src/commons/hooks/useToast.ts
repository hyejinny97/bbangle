import { toastState } from '@/atoms/atom';
import { ReactNode } from 'react';
import { useRecoilState } from 'recoil';

const useToast = () => {
  const [, setToast] = useRecoilState(toastState);

  const openToast = (popup: ReactNode) => setToast(popup);

  return { openToast };
};

export default useToast;
