'use client';

import { useRouter } from 'next/navigation';
import Back from '@/components/commons/header/assets/back_arrow.svg';

const BackButton = () => {
  const router = useRouter();

  const goBackHandler = () => {
    router.back();
  };

  return (
    <button
      type="button"
      className="mr-[17px] my-[6px]"
      onClick={goBackHandler}
      aria-label="back button"
    >
      <Back />
    </button>
  );
};

export default BackButton;
