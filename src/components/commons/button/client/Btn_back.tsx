'use client';

import Back from '@/components/commons/header/assets/back_arrow.svg';

const BtnBack = () => {
    const goBackHandler = () => {
        window.history.back();
    };

    return (
        <div onClick={goBackHandler}>
            <Back />
        </div>
    );
};

export default BtnBack;
