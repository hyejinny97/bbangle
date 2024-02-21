import { popupState } from '@/atoms/atom';
import { ReactNode } from 'react';
import { useRecoilState } from 'recoil';

const usePopup = () => {
    const [popup, setPopup] = useRecoilState(popupState);

    const popupVisible = !!popup;
    const openPopup = (popup: ReactNode) => setPopup(popup);
    const closePopup = () => setPopup(null);

    return { openPopup, closePopup, popupVisible };
};

export default usePopup;
