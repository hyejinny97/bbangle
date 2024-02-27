'use client';

import Button from '@/components/commons/button/client/Button';
import WithdrawPopup from '@/components/units/Withdraw/client/WithdrawPopup';
import usePopup from '@/commons/hooks/usePopup';

const WithdrawButton = () => {
  const { openPopup } = usePopup();

  const handleClickButton = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    openPopup(<WithdrawPopup />);
  };

  return <Button onClick={handleClickButton}>탈퇴하기</Button>;
};

export default WithdrawButton;
