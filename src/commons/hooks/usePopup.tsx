import { popupState } from '@/atoms/atom';
import { ReactNode } from 'react';
import { useRecoilState } from 'recoil';

const usePopup = () => {
    const [, setPopup] = useRecoilState(popupState);

    const openPopup = (popup: ReactNode) => setPopup(popup);
    const closePopup = () => setPopup(null);

    return { openPopup, closePopup };
};

export default usePopup;
