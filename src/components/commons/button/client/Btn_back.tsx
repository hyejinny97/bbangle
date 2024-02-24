'use client';

import { useRouter } from 'next/navigation';
import Back from '@/components/commons/header/assets/back_arrow.svg';

const BtnBack = () => {
  const router = useRouter();

  const goBackHandler = () => {
    router.back();
  };

  return (
    <div onClick={goBackHandler}>
      <Back />
    </div>
  );
};

export default BtnBack;
