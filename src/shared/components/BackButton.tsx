'use client';

import { BackArrowIcon } from '@/shared/components/icons';
import { useRouter } from 'next/navigation';

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
      <BackArrowIcon />
    </button>
  );
};

export default BackButton;
