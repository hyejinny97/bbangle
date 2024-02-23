'use client';

import { useRecoilValue } from 'recoil';
import { MouseEventHandler } from 'react';
import { popupState } from '@/atoms/atom';
import usePopup from '@/commons/hooks/usePopup';
import BackDrop from '../backgrounds/BackDrop';

const PopupContainer = () => {
  const popup = useRecoilValue(popupState);
  const { closePopup } = usePopup();

  const popupVisible = !!popup;
  if (!popupVisible) return <></>;

  const handleClick: MouseEventHandler<HTMLDivElement> = ({ target, currentTarget }) => {
    if (target === currentTarget) closePopup();
  };

  return (
    <BackDrop isVisible={popupVisible} onClick={handleClick}>
      {popup}
    </BackDrop>
  );
};

export default PopupContainer;
