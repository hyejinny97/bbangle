'use client';

import { toastState } from '@/atoms/atom';
import { useRecoilValue } from 'recoil';

const ToastContainer = () => {
  const toast = useRecoilValue(toastState);

  const popupVisible = !!toast;
  if (!popupVisible) return <></>;

  return toast;
};

export default ToastContainer;
