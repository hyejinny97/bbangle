'use client';

import { popupState } from '@/atoms/atom';
import usePopup from '@/commons/hooks/usePopup';
import { useRecoilValue } from 'recoil';
import BackDrop from '../backgrounds/BackDrop';
import { MouseEventHandler } from 'react';

const PopupContainer = () => {
    const popup = useRecoilValue(popupState);
    const { popupVisible, closePopup } = usePopup();

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
